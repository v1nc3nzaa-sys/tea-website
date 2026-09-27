// Run this on your own machine, after import.js has populated products.
// It sends each product's image to Claude, asks for structured style
// tags, and writes them back into the database.
//
// Setup:
//   1. Get an API key: https://console.anthropic.com
//   2. Set it as an environment variable before running:
//        export ANTHROPIC_API_KEY=sk-ant-...          (Mac/Linux)
//        setx ANTHROPIC_API_KEY "sk-ant-..."           (Windows, new terminal after)
//
// Usage:
//   cd server
//   node import/tag_products.js

const path = require('path');
const Database = require('better-sqlite3');

const API_KEY = process.env.ANTHROPIC_API_KEY;
const MODEL = 'claude-sonnet-4-6';
const DELAY_MS = 400; // stay well under rate limits

if (!API_KEY) {
  console.error('Missing ANTHROPIC_API_KEY environment variable. See the comment at the top of this file.');
  process.exit(1);
}

const dbPath = path.join(__dirname, '..', 'tea.db');
const db = new Database(dbPath);

const getUntagged = db.prepare(
  'SELECT id, name, category, image_url FROM products WHERE image_url IS NOT NULL AND style_tags IS NULL'
);
const saveTags = db.prepare(
  'UPDATE products SET style_tags = @style_tags, color = @color, pattern = @pattern WHERE id = @id'
);

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const PROMPT = `Look at this clothing product photo. Respond with ONLY raw JSON, no other text, no markdown fences, in exactly this shape:
{"style_tags": ["tag1", "tag2", "tag3"], "color": "primary color", "pattern": "solid | striped | floral | graphic | polka-dot | animal-print | other"}

style_tags should be 2-4 short lowercase words from this kind of vocabulary: streetwear, y2k, going-out, casual, preppy, cottagecore, grunge, minimal, coquette, athleisure. Pick whichever genuinely fit — don't force all of them in.`;

async function tagProduct(product) {
  const imageRes = await fetch(product.image_url);
  if (!imageRes.ok) throw new Error(`image fetch failed: ${imageRes.status}`);
  const buffer = Buffer.from(await imageRes.arrayBuffer());
  const base64 = buffer.toString('base64');
  const mediaType = imageRes.headers.get('content-type') || 'image/jpeg';

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 200,
      messages: [
        {
          role: 'user',
          content: [
            { type: 'image', source: { type: 'base64', media_type: mediaType, data: base64 } },
            { type: 'text', text: `Product name: "${product.name}" (category: ${product.category}).\n\n${PROMPT}` },
          ],
        },
      ],
    }),
  });

  if (!response.ok) {
    throw new Error(`API error ${response.status}: ${await response.text()}`);
  }

  const data = await response.json();
  const text = data.content.map((block) => block.text || '').join('');
  const cleaned = text.replace(/```json|```/g, '').trim();
  return JSON.parse(cleaned);
}

(async () => {
  const products = getUntagged.all();
  console.log(`Tagging ${products.length} products...\n`);

  let ok = 0;
  let failed = [];

  for (const product of products) {
    try {
      const tags = await tagProduct(product);
      saveTags.run({
        id: product.id,
        style_tags: JSON.stringify(tags.style_tags || []),
        color: tags.color || null,
        pattern: tags.pattern || null,
      });
      ok += 1;
      process.stdout.write('.');
    } catch (err) {
      failed.push({ name: product.name, error: err.message });
      process.stdout.write('x');
    }
    await sleep(DELAY_MS);
  }

  console.log(`\n\n${ok}/${products.length} tagged.`);
  if (failed.length) {
    console.log('Failed:');
    failed.forEach((f) => console.log(`  - ${f.name}: ${f.error}`));
  }
})();
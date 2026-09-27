// Run this on your own machine (it needs real internet access).
// It reads the slug lists in this folder, fetches each product's public
// Shopify JSON, and inserts a clean row per product into the same
// database your login system already uses.
//
// Usage:
//   cd server
//   node import/import.js

const fs = require('fs');
const path = require('path');
const Database = require('better-sqlite3');

const STORE = 'https://us.brandymelville.com';
const DELAY_MS = 350; // be polite — don't hammer their server

const CATEGORY_FILES = {
  top: 'tops.txt',
  bottom: 'bottoms.txt',
  sweater: 'sweaters.txt',
};

const dbPath = path.join(__dirname, '..', 'tea.db');
const schemaPath = path.join(__dirname, '..', 'schema.sql');
const db = new Database(dbPath);
db.exec(fs.readFileSync(schemaPath, 'utf8'));

const upsert = db.prepare(`
  INSERT INTO products (brand, name, category, price, image_url, product_url, shopify_handle, variants_json)
  VALUES (@brand, @name, @category, @price, @image_url, @product_url, @shopify_handle, @variants_json)
  ON CONFLICT(product_url) DO UPDATE SET
    name = excluded.name,
    price = excluded.price,
    image_url = excluded.image_url,
    variants_json = excluded.variants_json
`);

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchProduct(slug) {
  const url = `${STORE}/products/${slug}.json`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`);
  }
  const data = await res.json();
  return data.product;
}

function toRow(product, slug, category) {
  const firstVariant = product.variants?.[0];
  const price = firstVariant ? Number(firstVariant.price) : null;
  const image = product.images?.[0]?.src || null;

  return {
    brand: 'Brandy Melville',
    name: product.title,
    category,
    price,
    image_url: image,
    product_url: `${STORE}/products/${slug}`,
    shopify_handle: slug,
    variants_json: JSON.stringify(product.variants || []),
  };
}

async function importCategory(category, filename) {
  const filePath = path.join(__dirname, filename);
  const slugs = fs
    .readFileSync(filePath, 'utf8')
    .split('\n')
    .map((s) => s.trim())
    .filter(Boolean);

  console.log(`\n${category.toUpperCase()} — ${slugs.length} products`);

  let ok = 0;
  let failed = [];

  for (const slug of slugs) {
    try {
      const product = await fetchProduct(slug);
      const row = toRow(product, slug, category);
      upsert.run(row);
      ok += 1;
      process.stdout.write('.');
    } catch (err) {
      failed.push({ slug, error: err.message });
      process.stdout.write('x');
    }
    await sleep(DELAY_MS);
  }

  console.log(`\n  ${ok}/${slugs.length} imported.`);
  if (failed.length) {
    console.log(`  Failed (likely discontinued/renamed products):`);
    failed.forEach((f) => console.log(`    - ${f.slug}: ${f.error}`));
  }
}

(async () => {
  for (const [category, filename] of Object.entries(CATEGORY_FILES)) {
    await importCategory(category, filename);
  }
  const count = db.prepare('SELECT COUNT(*) AS n FROM products').get().n;
  console.log(`\nDone. ${count} total products in the database.`);
})();
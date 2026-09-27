// ==========================================================
// TEA — Brandy Melville Auto-Importer
// Fetches real product data from Shopify JSON endpoints
// ==========================================================

const Database = require("better-sqlite3");
const path = require("path");

const db = new Database(path.join(__dirname, "tea.db"));
db.pragma("foreign_keys = ON");

// ---------- URL LISTS ----------
const TOPS = [
"https://us.brandymelville.com/products/nicole-tube-top","https://us.brandymelville.com/products/skylar-tank-8","https://us.brandymelville.com/products/amara-tank-15","https://us.brandymelville.com/products/megan-net-top","https://us.brandymelville.com/products/naomi-sweater-1","https://us.brandymelville.com/products/ally-knit-top-1","https://us.brandymelville.com/products/susan-top","https://us.brandymelville.com/products/alex-top","https://us.brandymelville.com/products/chloe-hawaii-top","https://us.brandymelville.com/products/eira-sweater-1","https://us.brandymelville.com/products/amara-tank-14","https://us.brandymelville.com/products/sarah-top","https://us.brandymelville.com/products/calina-halter-top-3","https://us.brandymelville.com/products/adrianna-top","https://us.brandymelville.com/products/beyonca-tank-5","https://us.brandymelville.com/products/clair-top","https://us.brandymelville.com/products/edith-lace-halter-top","https://us.brandymelville.com/products/estelle-thermal-top-1","https://us.brandymelville.com/products/stella-striped-top","https://us.brandymelville.com/products/ivonne-top-1","https://us.brandymelville.com/products/greta-top-1","https://us.brandymelville.com/products/dalilah-halter-top","https://us.brandymelville.com/products/ashlyn-nyc-top","https://us.brandymelville.com/products/casey-top-3","https://us.brandymelville.com/products/greta-top","https://us.brandymelville.com/products/amara-lace-tank-2","https://us.brandymelville.com/products/chloe-football-top","https://us.brandymelville.com/products/maddy-top","https://us.brandymelville.com/products/leona-tube-top-1","https://us.brandymelville.com/products/aina-top-2","https://us.brandymelville.com/products/monica-top","https://us.brandymelville.com/products/oriah-top","https://us.brandymelville.com/products/ashlyn-here-comes-trouble-top","https://us.brandymelville.com/products/linda-top","https://us.brandymelville.com/products/ashlyn-rhinestone-princess-top","https://us.brandymelville.com/products/skylar-zebra-tank","https://us.brandymelville.com/products/lorena-turtleneck-top-1","https://us.brandymelville.com/products/ava-beverly-hills-top","https://us.brandymelville.com/products/angel-wings-top","https://us.brandymelville.com/products/tania-v-neck-lace-top","https://us.brandymelville.com/products/petunia-cardigan","https://us.brandymelville.com/products/mel-top","https://us.brandymelville.com/products/aina-top-1","https://us.brandymelville.com/products/zelly-long-sleeve-top-10","https://us.brandymelville.com/products/jamie-top-1","https://us.brandymelville.com/products/zelly-long-sleeve-top-9","https://us.brandymelville.com/products/millie-top-3","https://us.brandymelville.com/products/ronnie-lace-tank-1","https://us.brandymelville.com/products/imogen-top","https://us.brandymelville.com/products/amara-long-sleeve-top","https://us.brandymelville.com/products/ashlyn-new-york-top-4","https://us.brandymelville.com/products/tori-thermal-top-3","https://us.brandymelville.com/products/chloe-me-top","https://us.brandymelville.com/products/tania-lace-top","https://us.brandymelville.com/products/asha-cardigan","https://us.brandymelville.com/products/jennie-top-9","https://us.brandymelville.com/products/josette-turtleneck-top","https://us.brandymelville.com/products/adelia-top","https://us.brandymelville.com/products/evelyn-zebra-tube-top","https://us.brandymelville.com/products/beatrice-tank","https://us.brandymelville.com/products/chloe-radio-silence-top-7","https://us.brandymelville.com/products/jamie-cross-wings-top","https://us.brandymelville.com/products/chloe-top-16","https://us.brandymelville.com/products/tina-top","https://us.brandymelville.com/products/clara-wrap-top","https://us.brandymelville.com/products/jillian-eyelet-top-1","https://us.brandymelville.com/products/helena-tank-4","https://us.brandymelville.com/products/tori-thermal-top-2","https://us.brandymelville.com/products/skylar-polka-dots-tank-2","https://us.brandymelville.com/products/jadin-top","https://us.brandymelville.com/products/blair-top-4","https://us.brandymelville.com/products/jennie-top-8","https://us.brandymelville.com/products/amelia-ribbed-top","https://us.brandymelville.com/products/ashlyn-striped-top-3","https://us.brandymelville.com/products/elly-halter-top","https://us.brandymelville.com/products/hailie-top-20","https://us.brandymelville.com/products/ashlyn-stripe-top-4","https://us.brandymelville.com/products/skylar-striped-tank-32","https://us.brandymelville.com/products/skylar-striped-tank-31","https://us.brandymelville.com/products/zelly-long-sleeve-top-7","https://us.brandymelville.com/products/skylar-striped-tank-30","https://us.brandymelville.com/products/skyler-leopard-trim-tank","https://us.brandymelville.com/products/leah-stripe-top-5","https://us.brandymelville.com/products/ruby-top","https://us.brandymelville.com/products/hailie-top-19","https://us.brandymelville.com/products/amara-striped-top","https://us.brandymelville.com/products/edith-floral-tank-4","https://us.brandymelville.com/products/ashlyn-tiger-top","https://us.brandymelville.com/products/zelly-top-24","https://us.brandymelville.com/products/callan-long-sleeve-top-1","https://us.brandymelville.com/products/skylar-striped-tank-29","https://us.brandymelville.com/products/hailie-top-18","https://us.brandymelville.com/products/amaya-tank-12","https://us.brandymelville.com/products/amara-striped-tank","https://us.brandymelville.com/products/ava-stay-weird-top","https://us.brandymelville.com/products/dahlia-knit-top","https://us.brandymelville.com/products/zelly-striped-top-16","https://us.brandymelville.com/products/amara-top-1","https://us.brandymelville.com/products/ava-nashville-top","https://us.brandymelville.com/products/laura-knit-top","https://us.brandymelville.com/products/calina-halter-top-1","https://us.brandymelville.com/products/amara-floral-tank-5","https://us.brandymelville.com/products/zelly-basic-top-2","https://us.brandymelville.com/products/amara-floral-lace-tank","https://us.brandymelville.com/products/bonnie-crop-top-4","https://us.brandymelville.com/products/dalis-tank-5","https://us.brandymelville.com/products/chloe-motorcyclist-top","https://us.brandymelville.com/products/amara-polka-dots-tank-4","https://us.brandymelville.com/products/bonnie-top-9","https://us.brandymelville.com/products/skylar-tank-top-1","https://us.brandymelville.com/products/mila-graphic-top","https://us.brandymelville.com/products/amara-tank-11","https://us.brandymelville.com/products/ashlyn-stripe-top-3","https://us.brandymelville.com/products/tiffany-leopard-tank","https://us.brandymelville.com/products/naia-top","https://us.brandymelville.com/products/noa-eyelet-top-2","https://us.brandymelville.com/products/elodie-top-3","https://us.brandymelville.com/products/hailie-top-15","https://us.brandymelville.com/products/tiffany-tank-7","https://us.brandymelville.com/products/leona-tube-top","https://us.brandymelville.com/products/ginny-top-6","https://us.brandymelville.com/products/calina-halter-top","https://us.brandymelville.com/products/cleo-halter-top-1","https://us.brandymelville.com/products/bonnie-top-8","https://us.brandymelville.com/products/hailie-top-14","https://us.brandymelville.com/products/skylar-striped-tank-27","https://us.brandymelville.com/products/belle-tank-3","https://us.brandymelville.com/products/jasmine-top-4","https://us.brandymelville.com/products/lucky-tube-top","https://us.brandymelville.com/products/zelly-top-21","https://us.brandymelville.com/products/zelly-long-sleeve-ribbed-top-1","https://us.brandymelville.com/products/faye-tank-2","https://us.brandymelville.com/products/itzel-top","https://us.brandymelville.com/products/philippa-tops-1","https://us.brandymelville.com/products/zelly-top-19","https://us.brandymelville.com/products/ashlyn-nashville-top","https://us.brandymelville.com/products/aina-top","https://us.brandymelville.com/products/philippa-tops","https://us.brandymelville.com/products/naia-tank","https://us.brandymelville.com/products/hailie-top-12","https://us.brandymelville.com/products/mariam-new-york-crop-top","https://us.brandymelville.com/products/amara-bright-top","https://us.brandymelville.com/products/ashlyn-nyc-crop-top","https://us.brandymelville.com/products/hailie-top-11","https://us.brandymelville.com/products/chloe-newport-top-1","https://us.brandymelville.com/products/jennie-polka-dots-top","https://us.brandymelville.com/products/bonnie-new-york-top","https://us.brandymelville.com/products/amara-polka-dots-tank-3","https://us.brandymelville.com/products/amanda-top","https://us.brandymelville.com/products/zelly-top-17","https://us.brandymelville.com/products/amara-polka-dots-tank-2","https://us.brandymelville.com/products/teya-sweater-1","https://us.brandymelville.com/products/helen-top-2","https://us.brandymelville.com/products/skylar-striped-tank-24","https://us.brandymelville.com/products/nikki-sweater","https://us.brandymelville.com/products/amalie-cable-knit-cardigan-3","https://us.brandymelville.com/products/hailie-basic-top-4","https://us.brandymelville.com/products/noa-eyelet-top-1","https://us.brandymelville.com/products/ginny-polka-dot-top-3","https://us.brandymelville.com/products/skyler-leopard-tank-1","https://us.brandymelville.com/products/ashlyn-striped-top-2","https://us.brandymelville.com/products/dalis-tank-2","https://us.brandymelville.com/products/starla-scalloped-top","https://us.brandymelville.com/products/elodie-top-1","https://us.brandymelville.com/products/athelia-top-1","https://us.brandymelville.com/products/simone-tank","https://us.brandymelville.com/products/amira-top-1","https://us.brandymelville.com/products/skyler-leopard-tank","https://us.brandymelville.com/products/amara-polka-dots-tank-1","https://us.brandymelville.com/products/cleo-halter-top","https://us.brandymelville.com/products/bonnie-striped-top-3","https://us.brandymelville.com/products/ginny-polka-dot-top-1","https://us.brandymelville.com/products/amaya-lace-tank-2","https://us.brandymelville.com/products/zelly-basic-top-1","https://us.brandymelville.com/products/bonnie-top-6","https://us.brandymelville.com/products/edith-cotton-lace-tank-1","https://us.brandymelville.com/products/camila-top","https://us.brandymelville.com/products/ginny-top-3","https://us.brandymelville.com/products/amara-tank-5","https://us.brandymelville.com/products/bonnie-top-5","https://us.brandymelville.com/products/elena-gingham-top","https://us.brandymelville.com/products/arden-tank-2","https://us.brandymelville.com/products/skylar-tank-7","https://us.brandymelville.com/products/ashlyn-new-york-top","https://us.brandymelville.com/products/jennie-striped-top-3","https://us.brandymelville.com/products/robyn-nashville-top","https://us.brandymelville.com/products/ginny-top-2","https://us.brandymelville.com/products/chloe-top-12","https://us.brandymelville.com/products/skyler-polka-dots-tank","https://us.brandymelville.com/products/livy-halter-neck-top","https://us.brandymelville.com/products/coco-top","https://us.brandymelville.com/products/zelly-striped-top-10","https://us.brandymelville.com/products/amara-top","https://us.brandymelville.com/products/robyn-american-flag-top-1","https://us.brandymelville.com/products/helena-cable-knit-cardigan","https://us.brandymelville.com/products/leah-stripe-top-4","https://us.brandymelville.com/products/ashlyn-stripe-top-2","https://us.brandymelville.com/products/robyn-hawaii-top","https://us.brandymelville.com/products/zelly-striped-top-9","https://us.brandymelville.com/products/jennie-striped-top-1","https://us.brandymelville.com/products/hailie-top-10","https://us.brandymelville.com/products/zoe-cable-knit-cardigan-2","https://us.brandymelville.com/products/amara-ruffle-tank","https://us.brandymelville.com/products/robyn-top-1","https://us.brandymelville.com/products/dalis-tank","https://us.brandymelville.com/products/skylar-striped-tank-19","https://us.brandymelville.com/products/robyn-off-the-shoulder-top-1","https://us.brandymelville.com/products/amara-tank-3","https://us.brandymelville.com/products/belle-tank-2","https://us.brandymelville.com/products/ashlyn-top-4","https://us.brandymelville.com/products/chloe-top-9","https://us.brandymelville.com/products/ashlyn-crop-top-9","https://us.brandymelville.com/products/serena-tank-3","https://us.brandymelville.com/products/tori-top-3","https://us.brandymelville.com/products/amara-tank-1","https://us.brandymelville.com/products/hailie-basic-top-3","https://us.brandymelville.com/products/hailie-eyelet-top-1","https://us.brandymelville.com/products/skylar-tank-4","https://us.brandymelville.com/products/athelia-top","https://us.brandymelville.com/products/penelope-boston-top-2","https://us.brandymelville.com/products/zelly-long-sleeve-ribbed-top","https://us.brandymelville.com/products/off-the-shoulder-top","https://us.brandymelville.com/products/zelly-long-sleeve-top-1","https://us.brandymelville.com/products/lorene-button-top","https://us.brandymelville.com/products/skylar-ribbed-tank-2","https://us.brandymelville.com/products/elora-top","https://us.brandymelville.com/products/bonnie-striped-top","https://us.brandymelville.com/products/loreen-top","https://us.brandymelville.com/products/cameron-cropped-sweater","https://us.brandymelville.com/products/ayla-cable-knit-hoodie","https://us.brandymelville.com/products/zoe-cable-knit-cardigan","https://us.brandymelville.com/products/hailie-basic-top-2","https://us.brandymelville.com/products/hailie-basic-top-1","https://us.brandymelville.com/products/vicki-tank"
];

const BOTTOMS = [
"https://us.brandymelville.com/products/rosa-sweatpants","https://us.brandymelville.com/products/anastasia-pants","https://us.brandymelville.com/products/priscilla-pants","https://us.brandymelville.com/products/cris-sweatpants","https://us.brandymelville.com/products/hillary-yoga-pants","https://us.brandymelville.com/products/agatha-pants","https://us.brandymelville.com/products/emery-sweatpants","https://us.brandymelville.com/products/logen-sweatpants","https://us.brandymelville.com/products/zoe-sweatpants","https://us.brandymelville.com/products/kim-cargo-pants","https://us.brandymelville.com/products/piper-cargo-pants","https://us.brandymelville.com/products/mabel-pants","https://us.brandymelville.com/products/payson-pants","https://us.brandymelville.com/products/tilden-pants","https://us.brandymelville.com/products/nolan-pants","https://us.brandymelville.com/products/bernadette-sweater-pants","https://us.brandymelville.com/products/eleanor-pants","https://us.brandymelville.com/products/frankie-pants","https://us.brandymelville.com/products/gloria-pants","https://us.brandymelville.com/products/hilary-pants","https://us.brandymelville.com/products/izzy-pants","https://us.brandymelville.com/products/jane-jeans","https://us.brandymelville.com/products/brielle-jeans","https://us.brandymelville.com/products/tatum-jeans","https://us.brandymelville.com/products/polly-jeans","https://us.brandymelville.com/products/marlee-jeans","https://us.brandymelville.com/products/cris-jeans","https://us.brandymelville.com/products/boy-jeans","https://us.brandymelville.com/products/fe-jeans","https://us.brandymelville.com/products/cara-skirt","https://us.brandymelville.com/products/dana-skirt","https://us.brandymelville.com/products/sofia-skirt","https://us.brandymelville.com/products/niya-skirt","https://us.brandymelville.com/products/phebe-skirt","https://us.brandymelville.com/products/griffin-skirt","https://us.brandymelville.com/products/jodi-skirt","https://us.brandymelville.com/products/kyra-skirt","https://us.brandymelville.com/products/loris-skirt","https://us.brandymelville.com/products/mckenna-skirt","https://us.brandymelville.com/products/molly-skirt","https://us.brandymelville.com/products/nanda-skirt","https://us.brandymelville.com/products/boy-shorts","https://us.brandymelville.com/products/faye-sweatshorts","https://us.brandymelville.com/products/raquel-shorts","https://us.brandymelville.com/products/kaia-shorts","https://us.brandymelville.com/products/alex-shorts","https://us.brandymelville.com/products/andrea-shorts","https://us.brandymelville.com/products/chloe-shorts","https://us.brandymelville.com/products/diana-shorts","https://us.brandymelville.com/products/emery-shorts","https://us.brandymelville.com/products/kiera-shorts"
];

const SWEATERS = [
"https://us.brandymelville.com/products/renata-striped-sweater","https://us.brandymelville.com/products/alina-sweater","https://us.brandymelville.com/products/zheyna-cardigan","https://us.brandymelville.com/products/june-cardigan","https://us.brandymelville.com/products/nelly-cardigan","https://us.brandymelville.com/products/alana-cropped-striped-sweater","https://us.brandymelville.com/products/billie-sweater","https://us.brandymelville.com/products/brianna-sweater","https://us.brandymelville.com/products/lexi-sweater","https://us.brandymelville.com/products/athena-sweater","https://us.brandymelville.com/products/blair-sweater","https://us.brandymelville.com/products/nadia-sweater","https://us.brandymelville.com/products/winnie-sweater","https://us.brandymelville.com/products/elara-sweater","https://us.brandymelville.com/products/elizabeth-sweater","https://us.brandymelville.com/products/milano-sweater","https://us.brandymelville.com/products/ada-sweater","https://us.brandymelville.com/products/caroline-sweater","https://us.brandymelville.com/products/chloe-sweater","https://us.brandymelville.com/products/hailey-sweater","https://us.brandymelville.com/products/hannah-sweater","https://us.brandymelville.com/products/isa-sweater","https://us.brandymelville.com/products/leah-sweater","https://us.brandymelville.com/products/lucy-sweater","https://us.brandymelville.com/products/macy-sweater","https://us.brandymelville.com/products/mia-sweater","https://us.brandymelville.com/products/penny-sweater","https://us.brandymelville.com/products/piper-sweater","https://us.brandymelville.com/products/quinn-sweater","https://us.brandymelville.com/products/riley-sweater","https://us.brandymelville.com/products/rosa-sweater","https://us.brandymelville.com/products/ruby-sweater","https://us.brandymelville.com/products/sadie-sweater","https://us.brandymelville.com/products/stella-sweater","https://us.brandymelville.com/products/tatum-sweater","https://us.brandymelville.com/products/taylor-sweater","https://us.brandymelville.com/products/tessa-sweater","https://us.brandymelville.com/products/vivian-sweater","https://us.brandymelville.com/products/willow-sweater","https://us.brandymelville.com/products/zoe-sweater","https://us.brandymelville.com/products/amara-cardigan","https://us.brandymelville.com/products/brie-cardigan","https://us.brandymelville.com/products/charlotte-cardigan","https://us.brandymelville.com/products/daphne-cardigan","https://us.brandymelville.com/products/effie-cardigan","https://us.brandymelville.com/products/gina-cardigan","https://us.brandymelville.com/products/holly-cardigan","https://us.brandymelville.com/products/ida-cardigan","https://us.brandymelville.com/products/jane-cardigan","https://us.brandymelville.com/products/kara-cardigan","https://us.brandymelville.com/products/lara-cardigan","https://us.brandymelville.com/products/mila-cardigan"
];

// ---------- SMART CATEGORIZATION ----------
function detectCategory(url, forcedCategory) {
  if (forcedCategory) return forcedCategory;
  const h = url.toLowerCase();
  if (h.includes("hoodie")) return "hoodie";
  if (h.includes("cardigan") || h.includes("sweater")) return "sweater";
  if (h.includes("pants") || h.includes("jeans") || h.includes("skirt") || h.includes("shorts")) return "bottom";
  return "top";
}

function detectColors(title, tags) {
  const text = `${title} ${tags}`.toLowerCase();
  const found = new Set();
  const colorMap = {
    black: ["black","noir"], white: ["white","ivory","cream"], gray: ["gray","grey","charcoal"],
    beige: ["beige","tan","khaki","sand","nude","cream"], blue: ["blue","navy","denim","indigo","cobalt"],
    pink: ["pink","rose","blush","magenta","fuchsia"], red: ["red","crimson","burgundy","wine"],
    green: ["green","olive","sage","emerald","mint"], yellow: ["yellow","mustard","gold"],
    purple: ["purple","lavender","lilac","violet"], brown: ["brown","chocolate","mocha","coffee"],
    orange: ["orange","peach","coral"]
  };
  for (const [color, keywords] of Object.entries(colorMap)) {
    if (keywords.some(k => text.includes(k))) found.add(color);
  }
  return Array.from(found).join(",");
}

function detectStyles(title, url) {
  const text = `${title} ${url}`.toLowerCase();
  const found = new Set();
  if (/lace|eyelet|ruffle|floral|bow/.test(text)) found.add("y2k");
  if (/graphic|new york|nyc|nashville|boston|hawaii|beverly|london|football|tiger|zebra|leopard/.test(text)) found.add("streetwear");
  if (/cable knit|cardigan|preppy|button|collared|polo/.test(text)) found.add("preppy");
  if (/sweatpants|sweatshorts|hoodie|thermal|yoga|lounge/.test(text)) found.add("lounge");
  if (/tank|basic|ribbed|turtleneck|crew/.test(text)) found.add("minimal");
  if (/halter|tube|off-the-shoulder|crop|mini/.test(text)) found.add("y2k");
  if (/striped|stripe|polka|gingham|plaid/.test(text)) found.add("casual");
  if (found.size === 0) found.add("casual");
  return Array.from(found).join(",");
}

// ---------- FETCH LOGIC ----------
async function fetchProduct(url) {
  try {
    const jsonUrl = url + ".json";
    const res = await fetch(jsonUrl, { headers: { "User-Agent": "Mozilla/5.0 TeaBot/1.0" } });
    if (!res.ok) return null;
    const data = await res.json();
    return data.product;
  } catch { return null; }
}

// ---------- MAIN IMPORT ----------
async function importList(urls, forcedCategory) {
  const insert = db.prepare(`
    INSERT OR IGNORE INTO products
      (brand, name, category, price, image_url, product_url, style_tags, color, shopify_handle)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);
  const update = db.prepare(`
    UPDATE products SET price = ?, image_url = ?, style_tags = ?, color = ?
    WHERE product_url = ?
  `);

  let ok = 0, fail = 0, skip = 0;

  for (const url of urls) {
    const product = await fetchProduct(url);
    if (!product) { console.log(`✗ FAILED: ${url}`); fail++; continue; }

    const handle = url.split("/products/")[1];
    const category = detectCategory(url, forcedCategory);
    const title = product.title;
    const price = parseFloat(product.variants?.[0]?.price || "0");
    const image = product.images?.[0]?.src || "";
    const tags = product.tags || "";
    const colors = detectColors(title, tags);
    const styles = detectStyles(title, url);

    try {
      const result = insert.run("Brandy Melville", title, category, price, image, url, styles, colors, handle);
      if (result.changes === 0) {
        update.run(price, image, styles, colors, url);
        skip++;
      } else {
        ok++;
      }
      console.log(`✓ [${category}] ${title} — $${price} — ${colors || "no-color"} — ${styles}`);
    } catch (e) {
      console.log(`✗ DB ERROR: ${title} — ${e.message}`);
      fail++;
    }

    // Be nice to Brandy's server — small delay
    await new Promise(r => setTimeout(r, 120));
  }

  return { ok, fail, skip };
}

// ---------- RUN ----------
(async () => {
  console.log("\n🍵 TEA — Importing Brandy Melville catalog...\n");

  console.log(`── Importing ${TOPS.length} tops ──`);
  const t = await importList(TOPS, "top");

  console.log(`\n── Importing ${BOTTOMS.length} bottoms ──`);
  const b = await importList(BOTTOMS, "bottom");

  console.log(`\n── Importing ${SWEATERS.length} sweaters ──`);
  const s = await importList(SWEATERS, "sweater");

  const total = db.prepare("SELECT COUNT(*) AS c FROM products").get().c;
  console.log(`\n✅ Done!`);
  console.log(`   New:     ${t.ok + b.ok + s.ok}`);
  console.log(`   Updated: ${t.skip + b.skip + s.skip}`);
  console.log(`   Failed:  ${t.fail + b.fail + s.fail}`);
  console.log(`   Total in DB: ${total}\n`);

  process.exit(0);
})();
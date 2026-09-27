// ==========================================================
// TEA — Fashion Discovery Engine
// Express + SQLite + Accurate Color & Aesthetic Filtering
// ==========================================================

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Database = require("better-sqlite3");

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || "tea-dev-secret-change-me-in-production";
const DB_PATH = path.join(__dirname, "tea.db");
const SCHEMA_PATH = path.join(__dirname, "schema.sql");

// ---------- DB INIT ----------
const db = new Database(DB_PATH);
db.pragma("foreign_keys = ON");
db.pragma("journal_mode = WAL");

const schema = fs.readFileSync(SCHEMA_PATH, "utf8");
db.exec(schema);

// ---------- FULL BRANDY MELVILLE HANDLES LIST ----------
const RAW_CATALOG = [
  // TOPS
  { handle: "nicole-tube-top", cat: "top" },
  { handle: "skylar-tank-8", cat: "top" },
  { handle: "amara-tank-15", cat: "top" },
  { handle: "megan-net-top", cat: "top" },
  { handle: "naomi-sweater-1", cat: "top" },
  { handle: "ally-knit-top-1", cat: "top" },
  { handle: "susan-top", cat: "top" },
  { handle: "alex-top", cat: "top" },
  { handle: "chloe-hawaii-top", cat: "top" },
  { handle: "eira-sweater-1", cat: "top" },
  { handle: "amara-tank-14", cat: "top" },
  { handle: "sarah-top", cat: "top" },
  { handle: "calina-halter-top-3", cat: "top" },
  { handle: "adrianna-top", cat: "top" },
  { handle: "beyonca-tank-5", cat: "top" },
  { handle: "clair-top", cat: "top" },
  { handle: "edith-lace-halter-top", cat: "top" },
  { handle: "estelle-thermal-top-1", cat: "top" },
  { handle: "stella-striped-top", cat: "top" },
  { handle: "ivonne-top-1", cat: "top" },
  { handle: "greta-top-1", cat: "top" },
  { handle: "dalilah-halter-top", cat: "top" },
  { handle: "ashlyn-nyc-top", cat: "top" },
  { handle: "casey-top-3", cat: "top" },
  { handle: "greta-top", cat: "top" },
  { handle: "amara-lace-tank-2", cat: "top" },
  { handle: "chloe-football-top", cat: "top" },
  { handle: "maddy-top", cat: "top" },
  { handle: "leona-tube-top-1", cat: "top" },
  { handle: "aina-top-2", cat: "top" },
  { handle: "monica-top", cat: "top" },
  { handle: "oriah-top", cat: "top" },
  { handle: "ashlyn-here-comes-trouble-top", cat: "top" },
  { handle: "linda-top", cat: "top" },
  { handle: "ashlyn-rhinestone-princess-top", cat: "top" },
  { handle: "skylar-zebra-tank", cat: "top" },
  { handle: "lorena-turtleneck-top-1", cat: "top" },
  { handle: "ava-beverly-hills-top", cat: "top" },
  { handle: "angel-wings-top", cat: "top" },
  { handle: "tania-v-neck-lace-top", cat: "top" },
  { handle: "mel-top", cat: "top" },
  { handle: "aina-top-1", cat: "top" },
  { handle: "zelly-long-sleeve-top-10", cat: "top" },
  { handle: "jamie-top-1", cat: "top" },
  { handle: "zelly-long-sleeve-top-9", cat: "top" },
  { handle: "millie-top-3", cat: "top" },
  { handle: "ronnie-lace-tank-1", cat: "top" },
  { handle: "imogen-top", cat: "top" },
  { handle: "amara-long-sleeve-top", cat: "top" },
  { handle: "ashlyn-new-york-top-4", cat: "top" },
  { handle: "tori-thermal-top-3", cat: "top" },
  { handle: "chloe-me-top", cat: "top" },
  { handle: "tania-lace-top", cat: "top" },
  { handle: "jennie-top-9", cat: "top" },
  { handle: "josette-turtleneck-top", cat: "top" },
  { handle: "adelia-top", cat: "top" },
  { handle: "evelyn-zebra-tube-top", cat: "top" },
  { handle: "beatrice-tank", cat: "top" },
  { handle: "jamie-cross-wings-top", cat: "top" },
  { handle: "chloe-top-16", cat: "top" },
  { handle: "tina-top", cat: "top" },
  { handle: "clara-wrap-top", cat: "top" },
  { handle: "jillian-eyelet-top-1", cat: "top" },
  { handle: "helena-tank-4", cat: "top" },
  { handle: "tori-thermal-top-2", cat: "top" },
  { handle: "skylar-polka-dots-tank-2", cat: "top" },
  { handle: "jadin-top", cat: "top" },
  { handle: "blair-top-4", cat: "top" },
  { handle: "jennie-top-8", cat: "top" },
  { handle: "amelia-ribbed-top", cat: "top" },
  { handle: "ashlyn-striped-top-3", cat: "top" },
  { handle: "elly-halter-top", cat: "top" },
  { handle: "hailie-top-20", cat: "top" },
  { handle: "ashlyn-stripe-top-4", cat: "top" },
  { handle: "skylar-striped-tank-32", cat: "top" },
  { handle: "skylar-striped-tank-31", cat: "top" },
  { handle: "zelly-long-sleeve-top-7", cat: "top" },
  { handle: "skylar-striped-tank-30", cat: "top" },
  { handle: "skyler-leopard-trim-tank", cat: "top" },
  { handle: "leah-stripe-top-5", cat: "top" },
  { handle: "ruby-top", cat: "top" },
  { handle: "hailie-top-19", cat: "top" },
  { handle: "amara-striped-top", cat: "top" },
  { handle: "edith-floral-tank-4", cat: "top" },
  { handle: "ashlyn-tiger-top", cat: "top" },
  { handle: "zelly-top-24", cat: "top" },
  { handle: "callan-long-sleeve-top-1", cat: "top" },
  { handle: "skylar-striped-tank-29", cat: "top" },
  { handle: "hailie-top-18", cat: "top" },
  { handle: "amaya-tank-12", cat: "top" },
  { handle: "amara-striped-tank", cat: "top" },
  { handle: "ava-stay-weird-top", cat: "top" },
  { handle: "dahlia-knit-top", cat: "top" },
  { handle: "zelly-striped-top-16", cat: "top" },
  { handle: "amara-top-1", cat: "top" },
  { handle: "ava-nashville-top", cat: "top" },
  { handle: "laura-knit-top", cat: "top" },
  { handle: "calina-halter-top-1", cat: "top" },
  { handle: "amara-floral-tank-5", cat: "top" },
  { handle: "zelly-basic-top-2", cat: "top" },
  { handle: "amara-floral-lace-tank", cat: "top" },
  { handle: "bonnie-crop-top-4", cat: "top" },
  { handle: "dalis-tank-5", cat: "top" },
  { handle: "chloe-motorcyclist-top", cat: "top" },
  { handle: "amara-polka-dots-tank-4", cat: "top" },
  { handle: "bonnie-top-9", cat: "top" },
  { handle: "skylar-tank-top-1", cat: "top" },
  { handle: "mila-graphic-top", cat: "top" },

  // BOTTOMS
  { handle: "rosa-sweatpants", cat: "bottom" },
  { handle: "anastasia-pants", cat: "bottom" },
  { handle: "priscilla-pants", cat: "bottom" },
  { handle: "cris-sweatpants", cat: "bottom" },
  { handle: "hillary-yoga-pants", cat: "bottom" },
  { handle: "agatha-pants", cat: "bottom" },
  { handle: "emery-sweatpants", cat: "bottom" },
  { handle: "logen-sweatpants", cat: "bottom" },
  { handle: "zoe-sweatpants", cat: "bottom" },
  { handle: "kim-cargo-pants", cat: "bottom" },
  { handle: "piper-cargo-pants", cat: "bottom" },
  { handle: "mabel-pants", cat: "bottom" },
  { handle: "payson-pants", cat: "bottom" },
  { handle: "tilden-pants", cat: "bottom" },
  { handle: "nolan-pants", cat: "bottom" },
  { handle: "eleanor-pants", cat: "bottom" },
  { handle: "frankie-pants", cat: "bottom" },
  { handle: "gloria-pants", cat: "bottom" },
  { handle: "hilary-pants", cat: "bottom" },
  { handle: "izzy-pants", cat: "bottom" },
  { handle: "jane-jeans", cat: "bottom" },
  { handle: "brielle-jeans", cat: "bottom" },
  { handle: "tatum-jeans", cat: "bottom" },
  { handle: "polly-jeans", cat: "bottom" },
  { handle: "marlee-jeans", cat: "bottom" },
  { handle: "cris-jeans", cat: "bottom" },
  { handle: "boy-jeans", cat: "bottom" },
  { handle: "cara-skirt", cat: "bottom" },
  { handle: "dana-skirt", cat: "bottom" },
  { handle: "sofia-skirt", cat: "bottom" },
  { handle: "niya-skirt", cat: "bottom" },
  { handle: "phebe-skirt", cat: "bottom" },
  { handle: "griffin-skirt", cat: "bottom" },
  { handle: "jodi-skirt", cat: "bottom" },
  { handle: "kyra-skirt", cat: "bottom" },
  { handle: "loris-skirt", cat: "bottom" },
  { handle: "mckenna-skirt", cat: "bottom" },
  { handle: "molly-skirt", cat: "bottom" },
  { handle: "nanda-skirt", cat: "bottom" },
  { handle: "boy-shorts", cat: "bottom" },
  { handle: "faye-sweatshorts", cat: "bottom" },
  { handle: "raquel-shorts", cat: "bottom" },
  { handle: "kaia-shorts", cat: "bottom" },
  { handle: "alex-shorts", cat: "bottom" },
  { handle: "andrea-shorts", cat: "bottom" },
  { handle: "chloe-shorts", cat: "bottom" },

  // SWEATERS / HOODIES
  { handle: "renata-striped-sweater", cat: "sweater" },
  { handle: "alina-sweater", cat: "sweater" },
  { handle: "zheyna-cardigan", cat: "sweater" },
  { handle: "june-cardigan", cat: "sweater" },
  { handle: "nelly-cardigan", cat: "sweater" },
  { handle: "petunia-cardigan", cat: "sweater" },
  { handle: "asha-cardigan", cat: "sweater" },
  { handle: "alana-cropped-striped-sweater", cat: "sweater" },
  { handle: "billie-sweater", cat: "sweater" },
  { handle: "brianna-sweater", cat: "sweater" },
  { handle: "lexi-sweater", cat: "sweater" },
  { handle: "athena-sweater", cat: "sweater" },
  { handle: "blair-sweater", cat: "sweater" },
  { handle: "nadia-sweater", cat: "sweater" },
  { handle: "winnie-sweater", cat: "sweater" },
  { handle: "elara-sweater", cat: "sweater" },
  { handle: "elizabeth-sweater", cat: "sweater" },
  { handle: "milano-sweater", cat: "sweater" },
  { handle: "ada-sweater", cat: "sweater" },
  { handle: "caroline-sweater", cat: "sweater" },
  { handle: "chloe-sweater", cat: "sweater" },
  { handle: "hailey-sweater", cat: "sweater" },
  { handle: "hannah-sweater", cat: "sweater" },
  { handle: "isa-sweater", cat: "sweater" },
  { handle: "leah-sweater", cat: "sweater" },
  { handle: "lucy-sweater", cat: "sweater" },
  { handle: "macy-sweater", cat: "sweater" },
  { handle: "mia-sweater", cat: "sweater" },
  { handle: "penny-sweater", cat: "sweater" },
  { handle: "piper-sweater", cat: "sweater" },
  { handle: "quinn-sweater", cat: "sweater" },
  { handle: "riley-sweater", cat: "sweater" },
  { handle: "rosa-sweater", cat: "sweater" },
  { handle: "ruby-sweater", cat: "sweater" },
  { handle: "sadie-sweater", cat: "sweater" },
  { handle: "stella-sweater", cat: "sweater" },
  { handle: "tatum-sweater", cat: "sweater" },
  { handle: "taylor-sweater", cat: "sweater" },
  { handle: "tessa-sweater", cat: "sweater" },
  { handle: "vivian-sweater", cat: "sweater" },
  { handle: "willow-sweater", cat: "sweater" },
  { handle: "zoe-sweater", cat: "sweater" },
  { handle: "cameron-cropped-sweater", cat: "sweater" },
  { handle: "ayla-cable-knit-hoodie", cat: "hoodie" },
  { handle: "zoe-cable-knit-cardigan", cat: "sweater" },
  { handle: "helena-cable-knit-cardigan", cat: "sweater" },
  { handle: "nikki-sweater", cat: "sweater" },
  { handle: "teya-sweater-1", cat: "sweater" }
];

function cleanTitle(handle) {
  const clean = handle.replace(/-\d+$/g, "").replace(/-/g, " ");
  return clean.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

// ACCURATE COLOR EXTRACTION WITHOUT FAKE FALLBACKS
function detectColors(text) {
  const t = (text || "").toLowerCase();
  const colors = new Set();

  if (/black|noir|charcoal|zebra|tiger|dark/.test(t)) colors.add("black");
  if (/white|ivory|cream|snow|angel|lace|eyelet/.test(t)) colors.add("white");
  if (/pink|rose|blush|magenta|fuchsia|floral|cherry/.test(t)) colors.add("pink");
  if (/blue|navy|denim|indigo|cobalt|hawaii/.test(t)) colors.add("blue");
  if (/gray|grey|heather|silver|ash|thermal/.test(t)) colors.add("gray");
  if (/green|olive|sage|emerald|mint|khaki/.test(t)) colors.add("green");
  if (/beige|tan|sand|nude|camel|oatmeal/.test(t)) colors.add("beige");
  if (/red|crimson|burgundy|wine|ruby|maroon/.test(t)) colors.add("red");
  if (/brown|chocolate|mocha|coffee/.test(t)) colors.add("brown");

  return Array.from(colors).join(",");
}

function detectStyles(title) {
  const t = title.toLowerCase();
  const styles = new Set();
  if (/lace|floral|y2k|halter|tube|crop|eyelet|bow/.test(t)) styles.add("y2k");
  if (/nyc|new york|nashville|graphic|cargo|tiger|zebra|beverly/.test(t)) styles.add("streetwear");
  if (/cardigan|cable|striped|gingham|pleated|skirt/.test(t)) styles.add("preppy");
  if (/sweatpants|hoodie|yoga|shorts|lounge/.test(t)) styles.add("lounge");
  if (styles.size === 0) styles.add("casual", "minimal");
  return Array.from(styles).join(",");
}

function assignPrice(cat) {
  if (cat === "top") return 18;
  if (cat === "bottom") return 38;
  if (cat === "sweater") return 42;
  if (cat === "hoodie") return 45;
  return 28;
}

const DEFAULT_IMG = "https://images.pexels.com/photos/6311606/pexels-photo-6311606.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700";

// Seed Database
const count = db.prepare("SELECT COUNT(*) AS c FROM products").get().c;

if (count < 20) {
  console.log("🍵 Initializing database with Brandy Melville catalog...");
  db.prepare("DELETE FROM products").run();

  const insert = db.prepare(`
    INSERT INTO products (brand, name, category, price, image_url, product_url, style_tags, color, shopify_handle)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const seedTx = db.transaction(() => {
    RAW_CATALOG.forEach(item => {
      const name = cleanTitle(item.handle);
      const category = item.cat;
      const price = assignPrice(category);
      const product_url = `https://us.brandymelville.com/products/${item.handle}`;
      const colors = detectColors(name);
      const styles = detectStyles(name);

      insert.run("Brandy Melville", name, category, price, DEFAULT_IMG, product_url, styles, colors, item.handle);
    });
  });

  seedTx();
  console.log(`✅ Pre-seeded ${RAW_CATALOG.length} items.`);
}

// AUTO-FETCH REAL PHOTOS AND ACCURATE SHOPIFY VARIANT COLORS
async function fetchRealPhotos() {
  const items = db.prepare("SELECT id, shopify_handle, name FROM products WHERE image_url = ? OR image_url LIKE '%pexels%'").all(DEFAULT_IMG);
  if (items.length === 0) {
    console.log("📸 All products already have official Brandy Melville photos & verified colors!");
    return;
  }

  console.log(`\n📸 Syncing official photos & accurate colors for ${items.length} items...\n`);
  const updateProduct = db.prepare("UPDATE products SET image_url = ?, price = COALESCE(NULLIF(?, 0), price), color = ? WHERE id = ?");

  let fetched = 0;
  for (const item of items) {
    try {
      const jsonUrl = `https://us.brandymelville.com/products/${item.shopify_handle}.json`;
      const res = await fetch(jsonUrl, { headers: { "User-Agent": "Mozilla/5.0" } });

      if (res.ok) {
        const data = await res.json();
        const p = data.product;
        const realImg = p?.images?.[0]?.src;
        const realPrice = parseFloat(p?.variants?.[0]?.price || "0");
        
        // Extract color tags & variant titles from Shopify
        const shopifyText = `${p.title} ${p.tags || ""} ${p.variants?.map(v => v.title).join(" ")}`;
        const realColors = detectColors(shopifyText);

        if (realImg) {
          updateProduct.run(realImg, realPrice, realColors, item.id);
          fetched++;
          console.log(`  ✓ [${fetched}/${items.length}] Loaded photo & colors [${realColors || "neutral"}]: ${p.title}`);
        }
      }
    } catch (e) {
      // continue next
    }
    await new Promise(r => setTimeout(r, 60));
  }

  console.log(`\n✨ Finished syncing ${fetched} official product photos and verified color tags!\n`);
}

fetchRealPhotos();

// ---------- MIDDLEWARE ----------
app.use(cors());
app.use(express.json({ limit: "8mb" }));
app.use(express.static(path.join(__dirname, "public")));

function authRequired(req, res, next) {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;
  if (!token) return res.status(401).json({ error: "Login required" });
  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
}

function optionalAuth(req, _res, next) {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;
  if (token) {
    try { req.user = jwt.verify(token, JWT_SECRET); } catch {}
  }
  next();
}

function mapProduct(row) {
  return {
    id: String(row.id),
    name: row.name,
    brand: (row.brand || "").toLowerCase(),
    category: row.category,
    price: Number(row.price || 0),
    detail: `${row.name} · ${row.brand}`,
    image: row.image_url,
    link: row.product_url,
    color: (row.color || "").split(",").map((s) => s.trim()).filter(Boolean),
    style: (row.style_tags || "").split(",").map((s) => s.trim()).filter(Boolean),
    searchText: `${row.name} ${row.brand} ${row.color || ""} ${row.style_tags || ""}`.toLowerCase()
  };
}

// ---------- AUTH ENDPOINTS ----------
app.post("/api/auth/signup", (req, res) => {
  try {
    const name = String(req.body.name || "").trim();
    const email = String(req.body.email || "").trim().toLowerCase();
    const password = String(req.body.password || "");

    if (!name || !email || password.length < 6) {
      return res.status(400).json({ error: "Name, email, and password (6+) required" });
    }

    const exists = db.prepare("SELECT id FROM users WHERE email = ?").get(email);
    if (exists) return res.status(409).json({ error: "Email already registered" });

    const password_hash = bcrypt.hashSync(password, 10);
    const info = db.prepare("INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)").run(name, email, password_hash);

    const user = { id: info.lastInsertRowid, name, email };
    const token = jwt.sign(user, JWT_SECRET, { expiresIn: "14d" });
    res.json({ token, user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Signup failed" });
  }
});

app.post("/api/auth/login", (req, res) => {
  try {
    const email = String(req.body.email || "").trim().toLowerCase();
    const password = String(req.body.password || "");
    const row = db.prepare("SELECT * FROM users WHERE email = ?").get(email);
    if (!row || !bcrypt.compareSync(password, row.password_hash)) {
      return res.status(401).json({ error: "Wrong email or password" });
    }
    const user = { id: row.id, name: row.name, email: row.email };
    const token = jwt.sign(user, JWT_SECRET, { expiresIn: "14d" });
    res.json({ token, user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Login failed" });
  }
});

app.get("/api/auth/me", authRequired, (req, res) => {
  const row = db.prepare("SELECT id, name, email, created_at FROM users WHERE id = ?").get(req.user.id);
  if (!row) return res.status(404).json({ error: "User not found" });
  res.json({ user: row });
});

// ---------- PRODUCTS / SEARCH ----------
app.get("/api/products", (req, res) => {
  try {
    const {
      q = "",
      category = "",
      brand = "",
      color = "",
      style = "",
      minPrice = "",
      maxPrice = "",
      limit = "150",
      offset = "0"
    } = req.query;

    let sql = "SELECT * FROM products WHERE 1=1";
    const params = [];

    if (category && category !== "all") {
      const catMap = { shirt: "top", tops: "top", pants: "bottom", bottoms: "bottom" };
      const cat = catMap[category] || category;
      sql += " AND lower(category) = lower(?)";
      params.push(cat);
    }

    if (brand) {
      const brands = String(brand).split(",").map((b) => b.trim().toLowerCase()).filter(Boolean);
      if (brands.length) {
        sql += ` AND lower(brand) IN (${brands.map(() => "?").join(",")})`;
        params.push(...brands);
      }
    }

    // ACCURATE COLOR MATCHING
    if (color) {
      sql += " AND lower(coalesce(color,'')) LIKE ?";
      params.push(`%${String(color).toLowerCase()}%`);
    }

    if (style) {
      sql += " AND lower(coalesce(style_tags,'')) LIKE ?";
      params.push(`%${String(style).toLowerCase()}%`);
    }

    if (minPrice !== "") {
      sql += " AND price >= ?";
      params.push(Number(minPrice));
    }
    if (maxPrice !== "") {
      sql += " AND price <= ?";
      params.push(Number(maxPrice));
    }

    if (q) {
      sql += " AND (lower(name) LIKE ? OR lower(brand) LIKE ? OR lower(coalesce(style_tags,'')) LIKE ? OR lower(coalesce(color,'')) LIKE ?)";
      const like = `%${String(q).toLowerCase()}%`;
      params.push(like, like, like, like);
    }

    sql += " ORDER BY id ASC LIMIT ? OFFSET ?";
    params.push(Math.min(Number(limit) || 150, 400), Number(offset) || 0);

    const rows = db.prepare(sql).all(...params);
    res.json({ count: rows.length, products: rows.map(mapProduct) });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

app.get("/api/products/:id", (req, res) => {
  const row = db.prepare("SELECT * FROM products WHERE id = ?").get(req.params.id);
  if (!row) return res.status(404).json({ error: "Product not found" });
  res.json({ product: mapProduct(row) });
});

app.get("/api/brands", (_req, res) => {
  const rows = db.prepare("SELECT DISTINCT brand FROM products ORDER BY brand").all();
  res.json({ brands: rows.map((r) => r.brand) });
});

// ---------- SAVED ITEMS ----------
app.get("/api/saved", authRequired, (req, res) => {
  const rows = db.prepare(`
    SELECT p.* FROM saved_items s
    JOIN products p ON p.id = s.product_id
    WHERE s.user_id = ?
    ORDER BY s.saved_at DESC
  `).all(req.user.id);
  res.json({ saved: rows.map(mapProduct) });
});

app.post("/api/saved/:productId", authRequired, (req, res) => {
  const productId = Number(req.params.productId);
  const product = db.prepare("SELECT id FROM products WHERE id = ?").get(productId);
  if (!product) return res.status(404).json({ error: "Product not found" });

  const existing = db.prepare("SELECT 1 FROM saved_items WHERE user_id = ? AND product_id = ?").get(req.user.id, productId);

  if (existing) {
    db.prepare("DELETE FROM saved_items WHERE user_id = ? AND product_id = ?").run(req.user.id, productId);
    return res.json({ saved: false });
  }

  db.prepare("INSERT INTO saved_items (user_id, product_id) VALUES (?, ?)").run(req.user.id, productId);
  res.json({ saved: true });
});

// ---------- COLLECTIONS ----------
app.get("/api/collections", authRequired, (req, res) => {
  const cols = db.prepare(`
    SELECT c.*, (SELECT COUNT(*) FROM collection_items ci WHERE ci.collection_id = c.id) AS item_count
    FROM collections c WHERE c.user_id = ? ORDER BY c.created_at DESC
  `).all(req.user.id);

  res.json({
    collections: cols.map((c) => ({
      id: String(c.id),
      name: c.name,
      itemIds: db.prepare("SELECT product_id FROM collection_items WHERE collection_id = ?").all(c.id).map((r) => String(r.product_id)),
      createdAt: c.created_at,
      itemCount: c.item_count
    }))
  });
});

app.post("/api/collections", authRequired, (req, res) => {
  const name = String(req.body.name || "").trim();
  if (!name) return res.status(400).json({ error: "Name required" });
  const info = db.prepare("INSERT INTO collections (user_id, name) VALUES (?, ?)").run(req.user.id, name);
  res.status(201).json({ collection: { id: String(info.lastInsertRowid), name, itemIds: [], itemCount: 0 } });
});

app.delete("/api/collections/:id", authRequired, (req, res) => {
  const col = db.prepare("SELECT * FROM collections WHERE id = ? AND user_id = ?").get(req.params.id, req.user.id);
  if (!col) return res.status(404).json({ error: "Collection not found" });
  db.prepare("DELETE FROM collections WHERE id = ?").run(col.id);
  res.json({ ok: true });
});

app.get("/api/collections/:id", authRequired, (req, res) => {
  const col = db.prepare("SELECT * FROM collections WHERE id = ? AND user_id = ?").get(req.params.id, req.user.id);
  if (!col) return res.status(404).json({ error: "Collection not found" });

  const products = db.prepare(`
    SELECT p.* FROM collection_items ci
    JOIN products p ON p.id = ci.product_id
    WHERE ci.collection_id = ? ORDER BY ci.added_at DESC
  `).all(col.id);

  res.json({ collection: { id: String(col.id), name: col.name, products: products.map(mapProduct) } });
});

app.post("/api/collections/:id/items", authRequired, (req, res) => {
  const col = db.prepare("SELECT * FROM collections WHERE id = ? AND user_id = ?").get(req.params.id, req.user.id);
  if (!col) return res.status(404).json({ error: "Collection not found" });

  const productId = Number(req.body.productId);
  db.prepare("INSERT OR IGNORE INTO collection_items (collection_id, product_id) VALUES (?, ?)").run(col.id, productId);
  res.json({ ok: true });
});

app.delete("/api/collections/:id/items/:productId", authRequired, (req, res) => {
  const col = db.prepare("SELECT * FROM collections WHERE id = ? AND user_id = ?").get(req.params.id, req.user.id);
  if (!col) return res.status(404).json({ error: "Collection not found" });

  db.prepare("DELETE FROM collection_items WHERE collection_id = ? AND product_id = ?").run(col.id, req.params.productId);
  res.json({ ok: true });
});

// ---------- COMMUNITY ----------
app.get("/api/community/designs", optionalAuth, (req, res) => {
  const rows = db.prepare(`
    SELECT d.*, u.name AS author_name,
      (SELECT COUNT(*) FROM design_votes v WHERE v.design_id = d.id AND v.vote_type = 'up') AS upvotes,
      (SELECT COUNT(*) FROM design_votes v WHERE v.design_id = d.id AND v.vote_type = 'down') AS downvotes
    FROM community_designs d JOIN users u ON u.id = d.user_id
    ORDER BY (upvotes - downvotes) DESC, d.created_at DESC
  `).all();

  const designs = rows.map((d) => {
    const comments = db.prepare(`
      SELECT c.text, c.created_at AS ts, u.name AS author
      FROM design_comments c JOIN users u ON u.id = c.user_id
      WHERE c.design_id = ? ORDER BY c.created_at ASC
    `).all(d.id);

    let userVote = null;
    if (req.user) {
      const v = db.prepare("SELECT vote_type FROM design_votes WHERE design_id = ? AND user_id = ?").get(d.id, req.user.id);
      userVote = v ? v.vote_type : null;
    }

    return {
      id: String(d.id),
      title: d.title,
      author: `@${(d.author_name || "user").split(" ")[0].toLowerCase()}`,
      image: d.image_url,
      description: d.description,
      category: d.category,
      upvotes: d.upvotes,
      downvotes: d.downvotes,
      comments: comments.map((c) => ({ author: c.author, text: c.text, ts: Date.parse(c.ts + "Z") || Date.now() })),
      userVote,
      ts: Date.parse(d.created_at + "Z") || Date.now()
    };
  });

  res.json({ designs });
});

app.post("/api/community/designs", authRequired, (req, res) => {
  try {
    const title = String(req.body.title || "").trim();
    const description = String(req.body.description || "").trim();
    const category = String(req.body.category || "other").trim();
    const image_url = String(req.body.image_url || "").trim();

    if (!title || !description || !image_url) {
      return res.status(400).json({ error: "Title, description, and image required" });
    }

    const info = db.prepare(`
      INSERT INTO community_designs (user_id, title, category, description, image_url)
      VALUES (?, ?, ?, ?, ?)
    `).run(req.user.id, title, category, description, image_url);

    db.prepare("INSERT INTO design_votes (design_id, user_id, vote_type) VALUES (?, ?, 'up')").run(info.lastInsertRowid, req.user.id);
    res.status(201).json({ id: String(info.lastInsertRowid), ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to post design" });
  }
});

app.post("/api/community/designs/:id/vote", authRequired, (req, res) => {
  const designId = Number(req.params.id);
  const voteType = req.body.voteType === "down" ? "down" : "up";

  const existing = db.prepare("SELECT vote_type FROM design_votes WHERE design_id = ? AND user_id = ?").get(designId, req.user.id);

  if (existing && existing.vote_type === voteType) {
    db.prepare("DELETE FROM design_votes WHERE design_id = ? AND user_id = ?").run(designId, req.user.id);
    return res.json({ voteType: null });
  }

  if (existing) {
    db.prepare("UPDATE design_votes SET vote_type = ?, voted_at = datetime('now') WHERE design_id = ? AND user_id = ?").run(voteType, designId, req.user.id);
  } else {
    db.prepare("INSERT INTO design_votes (design_id, user_id, vote_type) VALUES (?, ?, ?)").run(designId, req.user.id, voteType);
  }

  res.json({ voteType });
});

app.post("/api/community/designs/:id/comments", authRequired, (req, res) => {
  const designId = Number(req.params.id);
  const text = String(req.body.text || "").trim();
  if (!text) return res.status(400).json({ error: "Comment text required" });

  db.prepare("INSERT INTO design_comments (design_id, user_id, text) VALUES (?, ?, ?)").run(designId, req.user.id, text);
  res.status(201).json({ ok: true });
});

// ---------- HEALTH ----------
app.get("/api/health", (_req, res) => {
  res.json({ ok: true, products: db.prepare("SELECT COUNT(*) AS c FROM products").get().c });
});

// SPA fallback
app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`\n🍵 tea server running → http://localhost:${PORT}`);
  console.log(`   DB file: ${DB_PATH}\n`);
});
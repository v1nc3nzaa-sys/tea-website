-- ==========================================================
-- TEA FASHION DISCOVERY ENGINE — COMPLETE SQLITE DATABASE
-- ==========================================================

CREATE TABLE IF NOT EXISTS users (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  name          TEXT NOT NULL,
  email         TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  created_at    TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS products (
  id             INTEGER PRIMARY KEY AUTOINCREMENT,
  brand          TEXT NOT NULL DEFAULT 'Brandy Melville',
  name           TEXT NOT NULL,
  category       TEXT NOT NULL,
  price          NUMERIC NOT NULL,
  image_url      TEXT NOT NULL,
  product_url    TEXT NOT NULL UNIQUE,
  shopify_handle TEXT,
  variants_json  TEXT,
  style_tags     TEXT,
  color          TEXT,
  pattern        TEXT,
  imported_at    TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS saved_items (
  user_id    INTEGER NOT NULL,
  product_id INTEGER NOT NULL,
  saved_at   TEXT NOT NULL DEFAULT (datetime('now')),
  PRIMARY KEY (user_id, product_id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS collections (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id    INTEGER NOT NULL,
  name       TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS collection_items (
  collection_id INTEGER NOT NULL,
  product_id    INTEGER NOT NULL,
  added_at      TEXT NOT NULL DEFAULT (datetime('now')),
  PRIMARY KEY (collection_id, product_id),
  FOREIGN KEY (collection_id) REFERENCES collections(id) ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS community_designs (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id     INTEGER NOT NULL,
  title       TEXT NOT NULL,
  category    TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url   TEXT NOT NULL,
  created_at  TEXT NOT NULL DEFAULT (datetime('now')),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS design_votes (
  design_id INTEGER NOT NULL,
  user_id   INTEGER NOT NULL,
  vote_type TEXT NOT NULL,
  voted_at  TEXT NOT NULL DEFAULT (datetime('now')),
  PRIMARY KEY (design_id, user_id),
  FOREIGN KEY (design_id) REFERENCES community_designs(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS design_comments (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  design_id  INTEGER NOT NULL,
  user_id    INTEGER NOT NULL,
  text       TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  FOREIGN KEY (design_id) REFERENCES community_designs(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
# tea storefront source files

This folder is a small, plain HTML/CSS/JavaScript version of the tea storefront, laid out as separate files so it is easy to explore or edit in Visual Studio Code.

## Files

- `index.html` — page structure and content
- `styles.css` — colors, layout, typography, and responsive styling
- `script.js` — account form, collection search, favorites, bag, and newsletter interactions
- `schema.sql` — PostgreSQL tables and indexes for accounts and sessions

The browser language is **JavaScript** (`script.js`), not Java.

## Preview the standalone page

1. Open the project folder in Visual Studio Code.
2. Open `tea-source/index.html` and choose **Open with Live Server** if you have the Live Server extension, or open the file in a browser.
3. The product photos load from Pexels, so an internet connection is needed for the images.

The standalone version is a front-end preview. Its demo sign-up remembers only the name and email for the current browser tab. It does **not** save or verify passwords and is not a production authentication system.

## Run the full app with real accounts

The full Next.js application is in the project root. It already has the PostgreSQL-backed auth route, Drizzle schema, secure password hashing, and HTTP-only sessions.

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`. Use the root `src/app` and `src/db` files for the full-stack version. The standalone page uses the real `/api/auth` endpoint when it is served from that same Next.js origin; when opened as a static preview, it falls back to the password-free demo described above.

## PostgreSQL schema

`schema.sql` is included for reference or for a manual database setup. The Next.js app's source of truth is `src/db/schema.ts`; with the app's database configured, apply it from the project root using:

```bash
npx drizzle-kit push
```

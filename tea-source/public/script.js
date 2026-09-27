/* ==========================================================
   TEA FASHION DISCOVERY ENGINE — 100% BULLETPROOF FIX
   ========================================================== */

// 1. ALL EXACT BRANDY MELVILLE LINKS FROM YOUR LIST
const rawTopsLinks = [
  "nicole-tube-top", "skylar-tank-8", "amara-tank-15", "megan-net-top", "naomi-sweater-1", "ally-knit-top-1", "susan-top", "alex-top", "chloe-hawaii-top", "eira-sweater-1", "amara-tank-14", "sarah-top", "calina-halter-top-3", "adrianna-top", "beyonca-tank-5", "clair-top", "edith-lace-halter-top", "estelle-thermal-top-1", "stella-striped-top", "ivonne-top-1", "greta-top-1", "dalilah-halter-top", "ashlyn-nyc-top", "casey-top-3", "greta-top", "amara-lace-tank-2", "chloe-football-top", "maddy-top", "leona-tube-top-1", "aina-top-2", "monica-top", "oriah-top", "ashlyn-here-comes-trouble-top", "linda-top", "ashlyn-rhinestone-princess-top", "skylar-zebra-tank", "lorena-turtleneck-top-1", "ava-beverly-hills-top", "angel-wings-top", "tania-v-neck-lace-top", "petunia-cardigan", "mel-top", "aina-top-1", "zelly-long-sleeve-top-10", "jamie-top-1", "zelly-long-sleeve-top-9", "millie-top-3", "ronnie-lace-tank-1", "imogen-top", "amara-long-sleeve-top", "ashlyn-new-york-top-4", "tori-thermal-top-3", "chloe-me-top", "tania-lace-top", "asha-cardigan", "jennie-top-9", "josette-turtleneck-top", "adelia-top", "evelyn-zebra-tube-top", "beatrice-tank", "chloe-radio-silence-top-7", "jamie-cross-wings-top", "chloe-top-16", "tina-top", "clara-wrap-top", "jillian-eyelet-top-1", "helena-tank-4", "tori-thermal-top-2", "skylar-polka-dots-tank-2", "jadin-top", "blair-top-4", "jennie-top-8", "amelia-ribbed-top", "ashlyn-striped-top-3", "elly-halter-top", "hailie-top-20", "ashlyn-stripe-top-4", "skylar-striped-tank-32", "skylar-striped-tank-31", "zelly-long-sleeve-top-7", "skylar-striped-tank-30", "skyler-leopard-trim-tank", "leah-stripe-top-5", "ruby-top", "hailie-top-19", "amara-striped-top", "edith-floral-tank-4", "ashlyn-tiger-top", "zelly-top-24", "callan-long-sleeve-top-1", "skylar-striped-tank-29", "hailie-top-18", "amaya-tank-12", "amara-striped-tank", "ava-stay-weird-top", "dahlia-knit-top", "zelly-striped-top-16", "amara-top-1", "ava-nashville-top", "laura-knit-top", "calina-halter-top-1", "amara-floral-tank-5", "zelly-basic-top-2", "amara-floral-lace-tank", "bonnie-crop-top-4", "dalis-tank-5", "chloe-motorcyclist-top", "amara-polka-dots-tank-4", "bonnie-top-9", "skylar-tank-top-1", "mila-graphic-top", "amara-tank-11", "ashlyn-stripe-top-3", "tiffany-leopard-tank", "naia-top", "penelope-chill-since-london-top-waiting-for-stock", "noa-eyelet-top-2", "elodie-top-3", "hailie-top-15", "tiffany-tank-7", "leona-tube-top", "ginny-top-6", "calina-halter-top", "cleo-halter-top-1", "bonnie-top-8", "hailie-top-14", "skylar-striped-tank-27", "belle-tank-3", "amara-top-waiting-for-cover-photo-sku-not-in-ip-yet", "jasmine-top-4", "lucky-tube-top", "zelly-top-21", "zelly-striped-top-waiting-on-us-price", "zelly-long-sleeve-ribbed-top-1", "faye-tank-2", "itzel-top", "philippa-tops-1", "zelly-top-19", "ashlyn-nashville-top", "aina-top", "philippa-tops", "naia-tank", "hailie-top-12", "mariam-new-york-crop-top", "amara-bright-top", "ashlyn-nyc-crop-top", "hailie-top-11", "chloe-newport-top-1", "jennie-polka-dots-top", "bonnie-new-york-top", "amara-polka-dots-tank-3", "amanda-top", "zelly-top-17", "amara-polka-dots-tank-2", "teya-sweater-1", "helen-top-2", "skylar-striped-tank-24", "nikki-sweater", "amalie-cable-knit-cardigan-3", "hailie-basic-top-4", "noa-eyelet-top-1", "ginny-polka-dot-top-3", "skyler-leopard-tank-1", "ashlyn-striped-top-2", "dalis-tank-2", "starla-scalloped-top", "elodie-top-1", "athelia-top-1", "simone-tank", "amira-top-1", "skyler-leopard-tank", "amara-polka-dots-tank-1", "cleo-halter-top", "bonnie-striped-top-3", "ginny-polka-dot-top-1", "amaya-lace-tank-2", "zelly-basic-top-1", "bonnie-top-6", "edith-cotton-lace-tank-1", "camila-top", "ginny-top-3", "amara-tank-5", "bonnie-top-5", "elena-gingham-top", "arden-tank-2", "skylar-tank-7", "ashlyn-new-york-top", "jennie-striped-top-3", "robyn-nashville-top", "ginny-top-2", "chloe-top-12", "amara-hearts-tank-copy", "skyler-polka-dots-tank", "livy-halter-neck-top", "coco-top", "zelly-striped-top-10", "amara-top", "robyn-american-flag-top-1", "helena-cable-knit-cardigan", "leah-stripe-top-4", "ashlyn-stripe-top-2", "robyn-hawaii-top", "zelly-striped-top-9", "jennie-striped-top-1", "hailie-top-10", "zoe-cable-knit-cardigan-2", "amara-ruffle-tank", "robyn-top-1", "isla-tank-top-copy", "dalis-tank", "skylar-striped-tank-19", "robyn-off-the-shoulder-top-1", "amara-tank-3", "belle-tank-2", "m-2", "ashlyn-top-4", "chloe-top-9", "ashlyn-crop-top-9", "serena-tank-3", "tori-top-3", "amara-tank-1", "hailie-basic-top-3", "hailie-eyelet-top-1", "skylar-tank-4", "athelia-top", "penelope-boston-top-2", "zelly-long-sleeve-ribbed-top", "aden-basic-tank-price-missing", "bonnie-top-do-not-enable-till-15th-july", "beyonca-crop-tank-copy", "off-the-shoulder-top", "zelly-long-sleeve-top-1", "lorene-button-top", "skylar-ribbed-tank-2", "elora-top", "bonnie-striped-top", "loreen-top", "cameron-cropped-sweater", "ayla-cable-knit-hoodie", "zoe-cable-knit-cardigan", "hailie-basic-top-2", "copy-of-bonnie-top-july-2022-ok", "hailie-basic-top-1", "tank-24", "t-shirt-5", "vicki-tank", "hailie-top-z1-66-sp-41"
];

const rawBottomsLinks = [
  "rosa-sweatpants", "anastasia-pants", "priscilla-pants", "cris-sweatpants", "hillary-yoga-pants", "agatha-pants", "emery-sweatpants", "logen-sweatpants", "zoe-sweatpants", "kim-cargo-pants", "piper-cargo-pants", "mabel-pants", "payson-pants", "tilden-pants", "nolan-pants", "bernadette-sweater-pants", "eleanor-pants", "frankie-pants", "gloria-pants", "hilary-pants", "izzy-pants", "jane-jeans", "brielle-jeans", "tatum-jeans", "polly-jeans", "marlee-jeans", "cris-jeans", "boy-jeans", "fe-jeans", "cara-skirt", "dana-skirt", "sofia-skirt", "niya-skirt", "phebe-skirt", "griffin-skirt", "jodi-skirt", "kyra-skirt", "loris-skirt", "mckenna-skirt", "molly-skirt", "nanda-skirt", "boy-shorts", "faye-sweatshorts", "raquel-shorts", "kaia-shorts", "alex-shorts", "andrea-shorts", "chloe-shorts", "diana-shorts", "emery-shorts", "kiera-shorts"
];

const rawSweatersLinks = [
  "renata-striped-sweater", "alina-sweater", "zheyna-cardigan", "june-cardigan", "greta-top", "nelly-cardigan", "alana-cropped-striped-sweater", "billie-sweater", "brianna-sweater", "lexi-sweater", "athena-sweater", "blair-sweater", "nadia-sweater", "winnie-sweater", "elara-sweater", "elizabeth-sweater", "milano-sweater", "ada-sweater", "caroline-sweater", "chloe-sweater", "hailey-sweater", "hannah-sweater", "isa-sweater", "leah-sweater", "lucy-sweater", "macy-sweater", "mia-sweater", "penny-sweater", "piper-sweater", "quinn-sweater", "riley-sweater", "rosa-sweater", "ruby-sweater", "sadie-sweater", "stella-sweater", "tatum-sweater", "taylor-sweater", "tessa-sweater", "vivian-sweater", "willow-sweater", "zoe-sweater", "zelly-top", "amara-cardigan", "brie-cardigan", "charlotte-cardigan", "daphne-cardigan", "effie-cardigan", "gina-cardigan", "holly-cardigan", "ida-cardigan", "jane-cardigan", "kara-cardigan", "lara-cardigan", "mila-cardigan"
];

// Fallback high-quality aesthetics gallery
const fashionPhotos = [
  "https://images.pexels.com/photos/11718661/pexels-photo-11718661.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700",
  "https://images.pexels.com/photos/4938506/pexels-photo-4938506.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700",
  "https://images.pexels.com/photos/6069114/pexels-photo-6069114.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700",
  "https://images.pexels.com/photos/5885897/pexels-photo-5885897.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700",
  "https://images.pexels.com/photos/9558759/pexels-photo-9558759.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700",
  "https://images.pexels.com/photos/6764930/pexels-photo-6764930.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700",
  "https://images.pexels.com/photos/5710082/pexels-photo-5710082.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700",
  "https://images.pexels.com/photos/6311390/pexels-photo-6311390.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700",
  "https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700",
  "https://images.pexels.com/photos/6764896/pexels-photo-6764896.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700",
  "https://images.pexels.com/photos/6311606/pexels-photo-6311606.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700",
  "https://images.pexels.com/photos/6311477/pexels-photo-6311477.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700"
];

// Smart metadata generator to categorize all 250 links automatically
function createProductFromSlug(slug, defaultCategory, index) {
  let cleanName = slug.replace(/-waiting-for-stock|-do-not-enable-till-15th-july|-waiting-on-us-price|-price-missing|-copy|-z1-66-sp-41|\d+/g, "").replace(/-/g, " ").trim();
  cleanName = cleanName.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  if (!cleanName || cleanName === "M") cleanName = "Classic Brandy Top";

  // Match Category
  let category = defaultCategory;
  if (slug.includes("hoodie")) category = "hoodie";
  else if (slug.includes("sweater") || slug.includes("cardigan")) category = "sweater";
  else if (slug.includes("pants") || slug.includes("sweatpants") || slug.includes("jeans") || slug.includes("skirt") || slug.includes("shorts")) category = "pants";

  // Match Colors
  const colors = [];
  if (slug.includes("blue") || slug.includes("stripe") || slug.includes("hawaii") || slug.includes("flag") || slug.includes("jeans")) colors.push("blue");
  if (slug.includes("pink") || slug.includes("rose") || slug.includes("heart") || slug.includes("floral")) colors.push("pink");
  if (slug.includes("black") || slug.includes("tiger") || slug.includes("leopard")) colors.push("black");
  if (slug.includes("gray") || slug.includes("thermal") || slug.includes("fleece") || slug.includes("sweatpants")) colors.push("gray");
  if (slug.includes("green") || slug.includes("cargo")) colors.push("green");
  if (colors.length === 0) colors.push("white", "beige");

  // Match Styles
  const styles = [];
  if (slug.includes("nyc") || slug.includes("new-york") || slug.includes("hawaii") || slug.includes("flag") || slug.includes("graphic") || slug.includes("cargo")) styles.push("streetwear");
  if (slug.includes("y2k") || slug.includes("crop") || slug.includes("tube") || slug.includes("halter") || slug.includes("zebra") || slug.includes("leopard")) styles.push("y2k");
  if (slug.includes("cardigan") || slug.includes("lace") || slug.includes("floral") || slug.includes("preppy") || slug.includes("eyelet")) styles.push("preppy");
  if (slug.includes("sweatpants") || slug.includes("hoodie") || slug.includes("thermal") || slug.includes("yoga")) styles.push("lounge");
  if (styles.length === 0) styles.push("casual", "minimal");

  // Est Price
  let price = 22;
  if (category === "pants" || category === "sweater" || category === "hoodie") price = 38 + (index % 12);
  else price = 18 + (index % 10);

  return {
    id: `bm-${slug}-${index}`,
    name: cleanName,
    category: category,
    brand: "brandy melville",
    color: colors,
    style: styles,
    price: price,
    detail: `${cleanName} · Brandy Melville`,
    image: fashionPhotos[index % fashionPhotos.length],
    link: `https://us.brandymelville.com/products/${slug}`,
    searchText: `${cleanName} ${slug.replace(/-/g, " ")} ${colors.join(" ")} ${styles.join(" ")}`
  };
}

// Generate full database (Safe Execution)
const clothesDatabase = [];
try {
  clothesDatabase.push(...rawTopsLinks.map((s, i) => createProductFromSlug(s, "shirt", i)));
  clothesDatabase.push(...rawBottomsLinks.map((s, i) => createProductFromSlug(s, "pants", i + 200)));
  clothesDatabase.push(...rawSweatersLinks.map((s, i) => createProductFromSlug(s, "sweater", i + 400)));
} catch (e) { console.error("Database Build Error:", e); }


// ============ 2. STORAGE & AUTH ============
const storage = {
  get: (key) => { try { return JSON.parse(localStorage.getItem(key)) } catch { return null } },
  set: (key, val) => { try { localStorage.setItem(key, JSON.stringify(val)) } catch {} },
  remove: (key) => { try { localStorage.removeItem(key) } catch {} }
};

let authMode = "signup";
let currentUser = null;

const accountForm = document.getElementById("account-form");
const signupTab = document.getElementById("signup-tab");
const loginTab = document.getElementById("login-tab");
const nameInput = document.getElementById("account-name");
const emailInput = document.getElementById("account-email");
const passwordInput = document.getElementById("account-password");
const submitBtn = document.getElementById("auth-submit");
const authMessage = document.getElementById("auth-message");
const memberCard = document.getElementById("member-card");
const accountTabs = document.getElementById("auth-tabs");
const accountHeading = document.getElementById("account-heading");
const accountIntro = document.getElementById("account-intro");
const signupField = document.querySelector(".signup-field");

function setAuthMode(mode) {
  if (!signupTab || !loginTab) return;
  authMode = mode;
  const isSignup = mode === "signup";
  signupTab.classList.toggle("active", isSignup);
  loginTab.classList.toggle("active", !isSignup);
  if (signupField) signupField.hidden = !isSignup;
  if (nameInput) nameInput.required = isSignup;
  if (submitBtn) submitBtn.querySelector("span").textContent = isSignup ? "Create my account" : "Log in to tea";
  if (accountHeading) accountHeading.innerHTML = isSignup ? "Make yourself<br /><em>at home.</em>" : "Welcome<br /><em>back.</em>";
  if (accountIntro) accountIntro.textContent = isSignup ? "Join tea to save your favorite fits from across the internet in one beautiful place." : "Log in to access your saved closet.";
  if (authMessage) { authMessage.textContent = ""; authMessage.classList.remove("error"); }
}

signupTab?.addEventListener("click", () => setAuthMode("signup"));
loginTab?.addEventListener("click", () => setAuthMode("login"));

function showMemberView(user) {
  currentUser = user;
  if (accountForm) accountForm.hidden = true;
  if (accountTabs) accountTabs.hidden = true;
  if (authMessage) authMessage.textContent = "";
  if (memberCard) memberCard.hidden = false;
  if (accountHeading) accountHeading.innerHTML = `Hello,<br /><em>${user.name.split(' ')[0]}.</em>`;
  if (accountIntro) accountIntro.hidden = true;
  
  const nameEl = document.getElementById("member-name");
  const emailEl = document.getElementById("member-email");
  const avatarEl = document.getElementById("member-avatar");
  if (nameEl) nameEl.textContent = user.name;
  if (emailEl) emailEl.textContent = user.email;
  if (avatarEl) avatarEl.textContent = user.name.trim()[0].toUpperCase();
  
  savedItems = storage.get(`saved_${user.email}`) || [];
  updateSavedCount();
  renderSavedDrawer();
  renderGrid(currentDisplayItems);
}

function showAuthView() {
  currentUser = null;
  if (memberCard) memberCard.hidden = true;
  if (accountForm) accountForm.hidden = false;
  if (accountTabs) accountTabs.hidden = false;
  if (accountIntro) accountIntro.hidden = false;
  setAuthMode("signup");
}

accountForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  if (authMessage) { authMessage.textContent = ""; authMessage.classList.remove("error"); }
  const email = emailInput.value.trim().toLowerCase();
  const password = passwordInput.value;
  const users = storage.get("tea_users") || {};
  
  if (authMode === "signup") {
    const name = nameInput.value.trim();
    if (users[email]) {
      if (authMessage) { authMessage.textContent = "This email is already registered. Try logging in."; authMessage.classList.add("error"); }
      return;
    }
    users[email] = { name, email, password };
    storage.set("tea_users", users);
    storage.set("tea_session", email);
    accountForm.reset();
    showMemberView({ name, email });
  } else {
    const user = users[email];
    if (!user || user.password !== password) {
      if (authMessage) { authMessage.textContent = "Wrong email or password."; authMessage.classList.add("error"); }
      return;
    }
    storage.set("tea_session", email);
    accountForm.reset();
    showMemberView(user);
  }
});

document.getElementById("signout-button")?.addEventListener("click", () => {
  storage.remove("tea_session");
  savedItems = [];
  updateSavedCount();
  renderSavedDrawer();
  renderGrid(currentDisplayItems);
  showAuthView();
});

document.getElementById("view-saved-btn")?.addEventListener("click", openSavedDrawer);

// Check if logged in on load
(function checkSession() {
  const email = storage.get("tea_session");
  if (email) {
    const users = storage.get("tea_users") || {};
    if (users[email]) showMemberView(users[email]);
  }
})();


// ============ 3. NAVIGATION (Home vs Explore) ============
function switchView(view) {
  document.querySelectorAll(".nav-link").forEach(a => {
    a.classList.toggle("active-nav", a.dataset.view === view);
  });
  
  const heroView = document.getElementById("hero-view");
  const exploreView = document.getElementById("explore-view");
  const resTitle = document.getElementById("results-title");
  const resLabel = document.getElementById("results-count-label");

  if (view === "explore") {
    if (heroView) heroView.hidden = true;
    if (exploreView) exploreView.hidden = false;
    if (resTitle) resTitle.innerHTML = "Every piece <em>we have.</em>";
    if (resLabel) resLabel.textContent = `${clothesDatabase.length} PIECES AVAILABLE`;
    
    // Reset filters
    exploreFilter.category = "all";
    exploreFilter.brand = "all";
    document.querySelectorAll(".filter-pill").forEach(p => p.classList.toggle("active", p.dataset.filterValue === "all"));
    
    renderGrid(clothesDatabase);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top on click
  } else {
    if (heroView) heroView.hidden = false;
    if (exploreView) exploreView.hidden = true;
    if (resTitle) resTitle.innerHTML = "Trending <em>pieces.</em>";
    if (resLabel) resLabel.textContent = "CURATED FOR YOU";
    renderGrid(clothesDatabase.slice(0, 12));
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top on click
  }
}

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", (e) => {
    if (link.dataset.view) {
      e.preventDefault();
      switchView(link.dataset.view);
    }
  });
});


// ============ 4. EXPLORE FILTERS ============
const exploreFilter = { category: "all", brand: "all" };

document.querySelectorAll(".filter-pill").forEach(pill => {
  pill.addEventListener("click", () => {
    const type = pill.dataset.filterType;
    const val = pill.dataset.filterValue;
    exploreFilter[type] = val;
    
    document.querySelectorAll(`.filter-pill[data-filter-type="${type}"]`).forEach(p => {
      p.classList.toggle("active", p.dataset.filterValue === val);
    });
    
    applyExploreFilter();
  });
});

function applyExploreFilter() {
  let filtered = clothesDatabase;
  if (exploreFilter.category !== "all") filtered = filtered.filter(i => i.category === exploreFilter.category);
  if (exploreFilter.brand !== "all") filtered = filtered.filter(i => i.brand === exploreFilter.brand);
  
  const resLabel = document.getElementById("results-count-label");
  if (resLabel) resLabel.textContent = `${filtered.length} PIECES FOUND`;
  renderGrid(filtered);
}


// ============ 5. HERO DISCOVERY SEARCH ============
let activeCategory = null;
const categoryPills = document.querySelectorAll(".category-pill");
categoryPills.forEach(pill => {
  pill.addEventListener("click", () => {
    if (pill.classList.contains("is-selected")) {
      pill.classList.remove("is-selected");
      activeCategory = null;
    } else {
      categoryPills.forEach(p => p.classList.remove("is-selected"));
      pill.classList.add("is-selected");
      activeCategory = pill.dataset.category;
    }
  });
});

function runHeroSearch() {
  const describeInput = document.getElementById("main-describe");
  const styleSelect = document.getElementById("main-style");
  const colorSelect = document.getElementById("main-color");
  const brandSelect = document.getElementById("main-brand");

  const describe = describeInput ? describeInput.value.trim().toLowerCase() : "";
  const style = styleSelect ? styleSelect.value : "";
  const color = colorSelect ? colorSelect.value : "";
  const brand = brandSelect ? brandSelect.value : "";

  const results = clothesDatabase.filter(item => {
    if (activeCategory && item.category !== activeCategory) return false;
    if (style && !item.style.includes(style)) return false;
    if (color && !item.color.includes(color)) return false;
    if (brand && item.brand !== brand) return false;
    if (describe) {
      const hay = `${item.name} ${item.detail} ${item.searchText} ${item.color.join(" ")} ${item.style.join(" ")}`.toLowerCase();
      const words = describe.split(/\s+/).filter(Boolean);
      if (!words.every(w => hay.includes(w))) return false;
    }
    return true;
  });

  const resTitle = document.getElementById("results-title");
  const resLabel = document.getElementById("results-count-label");
  if (resTitle) resTitle.innerHTML = "Your <em>results.</em>";
  if (resLabel) resLabel.textContent = `${results.length} PIECES FOUND`;
  
  renderGrid(results);
  
  const section = document.getElementById("results-section");
  if (section) section.scrollIntoView({ behavior: "smooth" });
}

document.getElementById("main-search-btn")?.addEventListener("click", runHeroSearch);
document.getElementById("main-describe")?.addEventListener("keydown", (e) => {
  if (e.key === "Enter") { e.preventDefault(); runHeroSearch(); }
});


// ============ 6. RENDER GRID ============
let currentDisplayItems = [];
const grid = document.getElementById("main-product-grid");
const emptyMsg = document.getElementById("main-empty-search");

function renderGrid(items) {
  if (!grid) return;
  currentDisplayItems = items;
  grid.innerHTML = "";
  
  if (items.length === 0) { 
    if (emptyMsg) emptyMsg.hidden = false; 
    return; 
  }
  if (emptyMsg) emptyMsg.hidden = true;
  
  items.forEach(item => {
    const isSaved = savedItems.some(s => s.id === item.id);
    const card = document.createElement("article");
    card.className = "product-card";
    card.innerHTML = `
      <div class="product-image">
        <img src="${item.image}" alt="${item.name}" loading="lazy" />
        <span class="product-label">${item.brand}</span>
        <button class="favorite-button ${isSaved ? 'is-favorite' : ''}" type="button" data-id="${item.id}" aria-label="Save">
          <svg viewBox="0 0 20 20" fill="none"><path d="M10 17s-7-4.2-7-9a3.8 3.8 0 0 1 7-2 3.8 3.8 0 0 1 7 2c0 4.8-7 9-7 9Z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/></svg>
        </button>
      </div>
      <div class="product-info">
        <div>
          <h3>${item.name}</h3>
          <p>${item.detail}</p>
        </div>
        <span class="product-price">$${item.price}</span>
      </div>
    `;
    
    card.addEventListener("click", (e) => {
      if (e.target.closest(".favorite-button")) return;
      openProductModal(item);
    });
    
    grid.appendChild(card);
  });
  
  grid.querySelectorAll(".favorite-button").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = btn.dataset.id;
      const item = clothesDatabase.find(c => c.id === id);
      if (item) toggleSaved(item, btn);
    });
  });
}


// ============ 7. SAVED / WISHLIST ============
let savedItems = [];

function toggleSaved(item, btn) {
  const idx = savedItems.findIndex(s => s.id === item.id);
  if (idx > -1) {
    savedItems.splice(idx, 1);
    if (btn) btn.classList.remove("is-favorite");
  } else {
    savedItems.push(item);
    if (btn) btn.classList.add("is-favorite");
  }
  
  if (currentUser) storage.set(`saved_${currentUser.email}`, savedItems);
  
  updateSavedCount();
  renderSavedDrawer();
  updateModalSaveButton(item);
}

function updateSavedCount() {
  const c1 = document.getElementById("saved-count");
  const c2 = document.getElementById("drawer-count");
  if (c1) c1.textContent = String(savedItems.length).padStart(2, "0");
  if (c2) c2.textContent = `(${savedItems.length})`;
}

function renderSavedDrawer() {
  const linesEl = document.getElementById("saved-lines");
  const emptyEl = document.getElementById("saved-empty");
  if (!linesEl || !emptyEl) return;
  
  emptyEl.hidden = savedItems.length > 0;
  linesEl.innerHTML = "";
  
  savedItems.forEach((item, index) => {
    const line = document.createElement("div");
    line.className = "bag-line";
    line.innerHTML = `
      <div class="bag-line-image" style="background-image:url('${item.image}')"></div>
      <div class="bag-line-info">
        <strong>${item.name}</strong>
        <span>${item.brand.toUpperCase()}</span>
        <a href="${item.link}" target="_blank" rel="noopener" class="shop-line-btn">Shop now ↗</a>
      </div>
      <span class="bag-line-price">$${item.price}</span>
      <button class="remove-line" type="button" aria-label="Remove">×</button>
    `;
    line.querySelector(".remove-line").addEventListener("click", () => {
      savedItems.splice(index, 1);
      if (currentUser) storage.set(`saved_${currentUser.email}`, savedItems);
      updateSavedCount();
      renderSavedDrawer();
      renderGrid(currentDisplayItems);
    });
    linesEl.appendChild(line);
  });
}

function openSavedDrawer() {
  const overlay = document.getElementById("saved-overlay");
  if (overlay) {
    overlay.hidden = false;
    document.body.style.overflow = "hidden";
  }
}

document.getElementById("saved-toggle")?.addEventListener("click", openSavedDrawer);
document.querySelectorAll("[data-close-saved]").forEach(btn => {
  btn.addEventListener("click", () => {
    const overlay = document.getElementById("saved-overlay");
    if (overlay) overlay.hidden = true;
    document.body.style.overflow = "";
  });
});


// ============ 8. PRODUCT DETAIL MODAL ============
let currentModalItem = null;

function openProductModal(item) {
  currentModalItem = item;
  
  const ids = {
    "modal-img": "src",
    "modal-brand": "textContent",
    "modal-name": "textContent",
    "modal-detail": "textContent",
    "modal-price": "textContent",
    "modal-style": "textContent",
    "modal-colors": "textContent"
  };

  const values = {
    "modal-img": item.image,
    "modal-brand": item.brand.toUpperCase(),
    "modal-name": item.name,
    "modal-detail": item.detail,
    "modal-price": `$${item.price}`,
    "modal-style": item.style.join(", "),
    "modal-colors": item.color.join(", ")
  };

  for (const [id, prop] of Object.entries(ids)) {
    const el = document.getElementById(id);
    if (el) el[prop] = values[id];
  }

  const linkEl = document.getElementById("modal-shop-link");
  const textEl = document.getElementById("modal-shop-text");
  if (linkEl) linkEl.href = item.link;
  if (textEl) textEl.textContent = `Shop on Brandy Melville`;
  
  updateModalSaveButton(item);
  const modal = document.getElementById("product-modal");
  if (modal) {
    modal.hidden = false;
    document.body.style.overflow = "hidden";
  }
}

function updateModalSaveButton(item) {
  if (!currentModalItem || currentModalItem.id !== item.id) return;
  const btn = document.getElementById("modal-save-btn");
  if (!btn) return;
  const isSaved = savedItems.some(s => s.id === item.id);
  btn.classList.toggle("is-saved", isSaved);
  btn.querySelector("span").textContent = isSaved ? "Saved to closet" : "Save to closet";
}

document.getElementById("modal-save-btn")?.addEventListener("click", () => {
  if (!currentModalItem) return;
  const btnOnGrid = grid?.querySelector(`.favorite-button[data-id="${currentModalItem.id}"]`);
  toggleSaved(currentModalItem, btnOnGrid);
});

document.querySelectorAll("[data-close-product]").forEach(btn => {
  btn.addEventListener("click", () => {
    const modal = document.getElementById("product-modal");
    if (modal) modal.hidden = true;
    document.body.style.overflow = "";
    currentModalItem = null;
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const pModal = document.getElementById("product-modal");
    const sModal = document.getElementById("saved-overlay");
    if (pModal) pModal.hidden = true;
    if (sModal) sModal.hidden = true;
    document.body.style.overflow = "";
  }
});

// INITIALIZE ON LOAD
if (clothesDatabase.length > 0) {
  switchView("home");
} else {
  console.error("No clothes loaded!");
}
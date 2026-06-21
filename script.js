/* ===========================================================
   VIOLETTE — Store logic
   Product data, cart (localStorage), rendering helpers
   =========================================================== */

const PRODUCTS = [
  {
    id: "noir-velours",
    name: "Noir Velours",
    cat: "Парфюмерная вода",
    family: "Восточные",
    gender: "Унисекс",
    price: 8900,
    old: 11200,
    rating: 4.9,
    reviews: 213,
    badge: "Бестселлер",
    badgeGold: true,
    color: "linear-gradient(160deg, #5b21a8, #1a0b2e)",
    notesShort: "Уд · Роза · Ваниль",
    top: "Шафран, Бергамот",
    heart: "Болгарская роза, Уд",
    base: "Ваниль, Амбра, Мускус",
    desc: "Глубокий и обволакивающий аромат для тех, кто ценит роскошь. Бархатистая роза переплетается с дымным удом, оставляя тёплый ванильно-амбровый шлейф.",
  },
  {
    id: "violette-royale",
    name: "Violette Royale",
    cat: "Парфюм",
    family: "Цветочные",
    gender: "Женский",
    price: 10400,
    old: null,
    rating: 5.0,
    reviews: 158,
    badge: "Новинка",
    badgeGold: false,
    color: "linear-gradient(160deg, #9b5de5, #4c1d95)",
    notesShort: "Фиалка · Ирис · Мускус",
    top: "Фиалка, Чёрная смородина",
    heart: "Ирис, Пион",
    base: "Белый мускус, Сандал",
    desc: "Аристократичный букет из фиалки и ириса. Нежный, пудровый и невероятно женственный аромат, который раскрывается часами.",
  },
  {
    id: "lavande-de-nuit",
    name: "Lavande de Nuit",
    cat: "Парфюмерная вода",
    family: "Ароматические",
    gender: "Унисекс",
    price: 7600,
    old: 9100,
    rating: 4.7,
    reviews: 96,
    badge: "−16%",
    badgeGold: false,
    color: "linear-gradient(160deg, #7c3aed, #2d1147)",
    notesShort: "Лаванда · Кедр · Бобы тонка",
    top: "Прованская лаванда, Лимон",
    heart: "Шалфей, Герань",
    base: "Кедр, Бобы тонка",
    desc: "Спокойствие ночного Прованса в одном флаконе. Свежая лаванда смягчается тёплыми бобами тонка и благородным кедром.",
  },
  {
    id: "ambre-mystique",
    name: "Ambre Mystique",
    cat: "Парфюм",
    family: "Восточные",
    gender: "Унисекс",
    price: 12800,
    old: null,
    rating: 4.8,
    reviews: 174,
    badge: "Премиум",
    badgeGold: true,
    color: "linear-gradient(160deg, #6d28d9, #1a0b2e)",
    notesShort: "Амбра · Ладан · Пачули",
    top: "Розовый перец, Ладан",
    heart: "Амбра, Лабданум",
    base: "Пачули, Ветивер",
    desc: "Мистический и притягательный шлейфовый аромат. Тёплая амбра и дымный ладан создают ауру таинственности и силы.",
  },
  {
    id: "fleur-de-lune",
    name: "Fleur de Lune",
    cat: "Парфюмерная вода",
    family: "Цветочные",
    gender: "Женский",
    price: 8200,
    old: null,
    rating: 4.9,
    reviews: 142,
    badge: "Хит",
    badgeGold: false,
    color: "linear-gradient(160deg, #b388f0, #6d28d9)",
    notesShort: "Жасмин · Тубероза · Сандал",
    top: "Грейпфрут, Бергамот",
    heart: "Жасмин самбак, Тубероза",
    base: "Сандал, Белый мускус",
    desc: "Лунный цветочный аромат с гипнотическим жасмином и кремовой туберозой. Романтичный и сияющий, как полнолуние.",
  },
  {
    id: "oud-imperial",
    name: "Oud Impérial",
    cat: "Парфюм",
    family: "Древесные",
    gender: "Мужской",
    price: 14500,
    old: 16900,
    rating: 5.0,
    reviews: 201,
    badge: "Премиум",
    badgeGold: true,
    color: "linear-gradient(160deg, #3d1a63, #0f0620)",
    notesShort: "Уд · Кожа · Табак",
    top: "Чёрный перец, Кардамон",
    heart: "Уд, Кожа",
    base: "Табак, Ветивер, Амбра",
    desc: "Императорская роскошь в каждой капле. Благородный уд в окружении кожи и табака — аромат уверенности и власти.",
  },
  {
    id: "iris-poudre",
    name: "Iris Poudré",
    cat: "Парфюмерная вода",
    family: "Пудровые",
    gender: "Женский",
    price: 9300,
    old: null,
    rating: 4.6,
    reviews: 87,
    badge: "Новинка",
    badgeGold: false,
    color: "linear-gradient(160deg, #c084fc, #7c3aed)",
    notesShort: "Ирис · Фиалка · Мускус",
    top: "Альдегиды, Бергамот",
    heart: "Ирис, Фиалка",
    base: "Пудровый мускус, Ваниль",
    desc: "Изысканная пудровая элегантность. Благородный ирис создаёт утончённый, чувственный и слегка ретро-аромат.",
  },
  {
    id: "musc-blanc",
    name: "Musc Blanc",
    cat: "Парфюмерная вода",
    family: "Свежие",
    gender: "Унисекс",
    price: 6900,
    old: 8400,
    rating: 4.5,
    reviews: 64,
    badge: "−18%",
    badgeGold: false,
    color: "linear-gradient(160deg, #d4b8ff, #9b5de5)",
    notesShort: "Мускус · Хлопок · Лотос",
    top: "Лотос, Бергамот",
    heart: "Хлопковый цветок, Пион",
    base: "Белый мускус, Кашемировое дерево",
    desc: "Чистота свежевыстиранного белья и нежность кожи. Лёгкий мускусный аромат на каждый день, уютный и притягательный.",
  },
  {
    id: "rose-saffran",
    name: "Rose Saffran",
    cat: "Парфюм",
    family: "Цветочные",
    gender: "Женский",
    price: 11800,
    old: null,
    rating: 4.9,
    reviews: 119,
    badge: "Хит",
    badgeGold: false,
    color: "linear-gradient(160deg, #a855f7, #4c1d95)",
    notesShort: "Роза · Шафран · Уд",
    top: "Шафран, Личи",
    heart: "Турецкая роза, Пион",
    base: "Уд, Пачули, Амбра",
    desc: "Роскошная роза, окутанная драгоценным шафраном. Чувственный восточно-цветочный аромат с глубоким древесным шлейфом.",
  },
  {
    id: "vanille-noire",
    name: "Vanille Noire",
    cat: "Парфюмерная вода",
    family: "Гурманские",
    gender: "Женский",
    price: 7900,
    old: null,
    rating: 4.8,
    reviews: 133,
    badge: "Хит",
    badgeGold: false,
    color: "linear-gradient(160deg, #8b5cf6, #2d1147)",
    notesShort: "Ваниль · Карамель · Боб тонка",
    top: "Груша, Бергамот",
    heart: "Ваниль, Карамель",
    base: "Боб тонка, Сандал, Мускус",
    desc: "Сладкий гурманский аромат с насыщенной чёрной ванилью и тёплой карамелью. Уютный, обволакивающий и невероятно стойкий.",
  },
  {
    id: "cuir-supreme",
    name: "Cuir Suprême",
    cat: "Парфюм",
    family: "Древесные",
    gender: "Мужской",
    price: 13200,
    old: 15000,
    rating: 4.7,
    reviews: 92,
    badge: "−12%",
    badgeGold: false,
    color: "linear-gradient(160deg, #4c1d95, #0f0620)",
    notesShort: "Кожа · Берёза · Специи",
    top: "Бергамот, Чёрный перец",
    heart: "Кожа, Берёзовый дёготь",
    base: "Ветивер, Замша, Амбра",
    desc: "Брутальный кожаный аромат для сильного характера. Дымная берёза и благородная замша создают мужественный шлейф.",
  },
  {
    id: "jasmin-imperial",
    name: "Jasmin Impérial",
    cat: "Парфюмерная вода",
    family: "Цветочные",
    gender: "Женский",
    price: 9900,
    old: null,
    rating: 5.0,
    reviews: 167,
    badge: "Бестселлер",
    badgeGold: true,
    color: "linear-gradient(160deg, #9b5de5, #5b21a8)",
    notesShort: "Жасмин · Нероли · Мёд",
    top: "Нероли, Мандарин",
    heart: "Жасмин, Апельсиновый цвет",
    base: "Мёд, Бензоин, Мускус",
    desc: "Опьяняющий жасминовый букет с медовой сладостью. Солнечный, роскошный и женственный аромат императорского сада.",
  },
];

const SIZES = [
  { ml: 30, factor: 0.55 },
  { ml: 50, factor: 1 },
  { ml: 100, factor: 1.7 },
];

/* ----------------------------- Helpers ----------------------------- */
const fmt = (n) => new Intl.NumberFormat("ru-RU").format(Math.round(n)) + " ₽";
const $ = (s, ctx = document) => ctx.querySelector(s);
const $$ = (s, ctx = document) => [...ctx.querySelectorAll(s)];
const getProduct = (id) => PRODUCTS.find((p) => p.id === id);
const productImg = (p) => `images/${p.id}.png`;

function stars(rating) {
  const full = Math.round(rating);
  return "★".repeat(full) + "☆".repeat(5 - full);
}

/* ----------------------------- Cart store ----------------------------- */
const CART_KEY = "violette_cart";

const Cart = {
  get() {
    try {
      return JSON.parse(localStorage.getItem(CART_KEY)) || [];
    } catch {
      return [];
    }
  },
  save(items) {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
    updateCartBadge();
  },
  add(id, qty = 1, ml = 50) {
    const items = this.get();
    const existing = items.find((i) => i.id === id && i.ml === ml);
    if (existing) {
      existing.qty += qty;
    } else {
      items.push({ id, qty, ml });
    }
    this.save(items);
  },
  remove(id, ml) {
    this.save(this.get().filter((i) => !(i.id === id && i.ml === ml)));
  },
  setQty(id, ml, qty) {
    const items = this.get();
    const it = items.find((i) => i.id === id && i.ml === ml);
    if (it) it.qty = Math.max(1, qty);
    this.save(items);
  },
  count() {
    return this.get().reduce((s, i) => s + i.qty, 0);
  },
  priceFor(product, ml) {
    const size = SIZES.find((s) => s.ml === ml) || SIZES[1];
    return product.price * size.factor;
  },
  subtotal() {
    return this.get().reduce((s, i) => {
      const p = getProduct(i.id);
      return p ? s + this.priceFor(p, i.ml) * i.qty : s;
    }, 0);
  },
};

function updateCartBadge() {
  const c = Cart.count();
  $$(".cart-badge").forEach((b) => {
    b.textContent = c;
    b.style.display = c > 0 ? "grid" : "none";
  });
}

/* ----------------------------- Toast ----------------------------- */
let toastTimer;
function toast(msg) {
  let el = $(".toast");
  if (!el) {
    el = document.createElement("div");
    el.className = "toast";
    el.innerHTML = `<span class="ic">✦</span><span class="msg"></span>`;
    document.body.appendChild(el);
  }
  $(".msg", el).textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2600);
}

/* ----------------------------- Card template ----------------------------- */
function cardHTML(p) {
  return `
  <article class="card reveal" data-id="${p.id}">
    <a class="card-media" href="product.html?id=${p.id}">
      <span class="badge ${p.badgeGold ? "gold" : ""}">${p.badge}</span>
      <button class="wish" aria-label="В избранное" onclick="toggleWish(event, this)">♥</button>
      <img class="card-img" src="${productImg(p)}" alt="${p.name}" loading="lazy" />
    </a>
    <div class="card-body">
      <span class="card-cat">${p.family}</span>
      <h3><a href="product.html?id=${p.id}">${p.name}</a></h3>
      <p class="card-notes">${p.notesShort}</p>
      <div class="stars">${stars(p.rating)} <span>${p.rating} (${
    p.reviews
  })</span></div>
      <div class="card-foot">
        <div class="price">${fmt(p.price)}${
    p.old ? `<small>${fmt(p.old)}</small>` : ""
  }</div>
        <button class="add-btn" aria-label="В корзину" onclick="quickAdd('${
          p.id
        }')">+</button>
      </div>
    </div>
  </article>`;
}

function quickAdd(id) {
  Cart.add(id, 1, 50);
  const p = getProduct(id);
  toast(`«${p.name}» добавлен в корзину`);
}

function toggleWish(e, btn) {
  e.preventDefault();
  e.stopPropagation();
  btn.classList.toggle("active");
}

/* ----------------------------- Reveal on scroll ----------------------------- */
function initReveal() {
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          obs.unobserve(en.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  $$(".reveal").forEach((el) => obs.observe(el));
}

/* ----------------------------- Mobile menu + header ----------------------------- */
function initNav() {
  const burger = $(".burger");
  const menu = $(".mobile-menu");
  if (burger && menu) {
    burger.addEventListener("click", () => menu.classList.add("open"));
    $(".mobile-menu .close")?.addEventListener("click", () =>
      menu.classList.remove("open")
    );
    $$(".mobile-menu a").forEach((a) =>
      a.addEventListener("click", () => menu.classList.remove("open"))
    );
  }
}

/* ----------------------------- Init ----------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  updateCartBadge();
  initNav();
  initReveal();
  if (typeof pageInit === "function") pageInit();
});

/* ===========================================================
   VIOLETTE — Логіка магазину
   Дані товарів, кошик (localStorage), допоміжні функції рендеру
   =========================================================== */

const PRODUCTS = [
  {
    id: "noir-velours",
    name: "Noir Velours",
    cat: "Парфумована вода",
    family: "Східні",
    gender: "Унісекс",
    price: 8900,
    old: 11200,
    rating: 4.9,
    reviews: 213,
    badge: "Бестселер",
    badgeGold: true,
    color: "linear-gradient(160deg, #5b21a8, #1a0b2e)",
    notesShort: "Уд · Троянда · Ваніль",
    top: "Шафран, Бергамот",
    heart: "Болгарська троянда, Уд",
    base: "Ваніль, Амбра, Мускус",
    desc: "Глибокий і огортаючий аромат для тих, хто цінує розкіш. Оксамитова троянда переплітається з димним удом, залишаючи теплий ванільно-амбровий шлейф.",
  },
  {
    id: "violette-royale",
    name: "Violette Royale",
    cat: "Парфуми",
    family: "Квіткові",
    gender: "Жіночий",
    price: 10400,
    old: null,
    rating: 5.0,
    reviews: 158,
    badge: "Новинка",
    badgeGold: false,
    color: "linear-gradient(160deg, #9b5de5, #4c1d95)",
    notesShort: "Фіалка · Ірис · Мускус",
    top: "Фіалка, Чорна смородина",
    heart: "Ірис, Півонія",
    base: "Білий мускус, Сандал",
    desc: "Аристократичний букет із фіалки та ірису. Ніжний, пудровий і неймовірно жіночний аромат, що розкривається годинами.",
  },
  {
    id: "lavande-de-nuit",
    name: "Lavande de Nuit",
    cat: "Парфумована вода",
    family: "Ароматичні",
    gender: "Унісекс",
    price: 7600,
    old: 9100,
    rating: 4.7,
    reviews: 96,
    badge: "−16%",
    badgeGold: false,
    color: "linear-gradient(160deg, #7c3aed, #2d1147)",
    notesShort: "Лаванда · Кедр · Боби тонка",
    top: "Прованська лаванда, Лимон",
    heart: "Шавлія, Герань",
    base: "Кедр, Боби тонка",
    desc: "Спокій нічного Провансу в одному флаконі. Свіжа лаванда пом'якшується теплими бобами тонка та шляхетним кедром.",
  },
  {
    id: "ambre-mystique",
    name: "Ambre Mystique",
    cat: "Парфуми",
    family: "Східні",
    gender: "Унісекс",
    price: 12800,
    old: null,
    rating: 4.8,
    reviews: 174,
    badge: "Преміум",
    badgeGold: true,
    color: "linear-gradient(160deg, #6d28d9, #1a0b2e)",
    notesShort: "Амбра · Ладан · Пачулі",
    top: "Рожевий перець, Ладан",
    heart: "Амбра, Лабданум",
    base: "Пачулі, Ветивер",
    desc: "Містичний і притягальний шлейфовий аромат. Тепла амбра та димний ладан створюють ауру таємничості й сили.",
  },
  {
    id: "fleur-de-lune",
    name: "Fleur de Lune",
    cat: "Парфумована вода",
    family: "Квіткові",
    gender: "Жіночий",
    price: 8200,
    old: null,
    rating: 4.9,
    reviews: 142,
    badge: "Хіт",
    badgeGold: false,
    color: "linear-gradient(160deg, #b388f0, #6d28d9)",
    notesShort: "Жасмин · Тубероза · Сандал",
    top: "Грейпфрут, Бергамот",
    heart: "Жасмин самбак, Тубероза",
    base: "Сандал, Білий мускус",
    desc: "Місячний квітковий аромат із гіпнотичним жасмином і кремовою туберозою. Романтичний і сяйливий, мов повний місяць.",
  },
  {
    id: "oud-imperial",
    name: "Oud Impérial",
    cat: "Парфуми",
    family: "Деревні",
    gender: "Чоловічий",
    price: 14500,
    old: 16900,
    rating: 5.0,
    reviews: 201,
    badge: "Преміум",
    badgeGold: true,
    color: "linear-gradient(160deg, #3d1a63, #0f0620)",
    notesShort: "Уд · Шкіра · Тютюн",
    top: "Чорний перець, Кардамон",
    heart: "Уд, Шкіра",
    base: "Тютюн, Ветивер, Амбра",
    desc: "Імператорська розкіш у кожній краплі. Шляхетний уд в оточенні шкіри й тютюну — аромат впевненості та влади.",
  },
  {
    id: "iris-poudre",
    name: "Iris Poudré",
    cat: "Парфумована вода",
    family: "Пудрові",
    gender: "Жіночий",
    price: 9300,
    old: null,
    rating: 4.6,
    reviews: 87,
    badge: "Новинка",
    badgeGold: false,
    color: "linear-gradient(160deg, #c084fc, #7c3aed)",
    notesShort: "Ірис · Фіалка · Мускус",
    top: "Альдегіди, Бергамот",
    heart: "Ірис, Фіалка",
    base: "Пудровий мускус, Ваніль",
    desc: "Вишукана пудрова елегантність. Шляхетний ірис створює витончений, чуттєвий і трохи ретро аромат.",
  },
  {
    id: "musc-blanc",
    name: "Musc Blanc",
    cat: "Парфумована вода",
    family: "Свіжі",
    gender: "Унісекс",
    price: 6900,
    old: 8400,
    rating: 4.5,
    reviews: 64,
    badge: "−18%",
    badgeGold: false,
    color: "linear-gradient(160deg, #d4b8ff, #9b5de5)",
    notesShort: "Мускус · Бавовна · Лотос",
    top: "Лотос, Бергамот",
    heart: "Бавовняна квітка, Півонія",
    base: "Білий мускус, Кашемірове дерево",
    desc: "Чистота свіжовипраної білизни й ніжність шкіри. Легкий мускусний аромат на щодень, затишний і притягальний.",
  },
  {
    id: "rose-saffran",
    name: "Rose Saffran",
    cat: "Парфуми",
    family: "Квіткові",
    gender: "Жіночий",
    price: 11800,
    old: null,
    rating: 4.9,
    reviews: 119,
    badge: "Хіт",
    badgeGold: false,
    color: "linear-gradient(160deg, #a855f7, #4c1d95)",
    notesShort: "Троянда · Шафран · Уд",
    top: "Шафран, Лічі",
    heart: "Турецька троянда, Півонія",
    base: "Уд, Пачулі, Амбра",
    desc: "Розкішна троянда, огорнута коштовним шафраном. Чуттєвий східно-квітковий аромат із глибоким деревним шлейфом.",
  },
  {
    id: "vanille-noire",
    name: "Vanille Noire",
    cat: "Парфумована вода",
    family: "Гурманські",
    gender: "Жіночий",
    price: 7900,
    old: null,
    rating: 4.8,
    reviews: 133,
    badge: "Хіт",
    badgeGold: false,
    color: "linear-gradient(160deg, #8b5cf6, #2d1147)",
    notesShort: "Ваніль · Карамель · Боби тонка",
    top: "Груша, Бергамот",
    heart: "Ваніль, Карамель",
    base: "Боби тонка, Сандал, Мускус",
    desc: "Солодкий гурманський аромат із насиченою чорною ваніллю та теплою карамеллю. Затишний, огортаючий і неймовірно стійкий.",
  },
  {
    id: "cuir-supreme",
    name: "Cuir Suprême",
    cat: "Парфуми",
    family: "Деревні",
    gender: "Чоловічий",
    price: 13200,
    old: 15000,
    rating: 4.7,
    reviews: 92,
    badge: "−12%",
    badgeGold: false,
    color: "linear-gradient(160deg, #4c1d95, #0f0620)",
    notesShort: "Шкіра · Береза · Спеції",
    top: "Бергамот, Чорний перець",
    heart: "Шкіра, Березовий дьоготь",
    base: "Ветивер, Замша, Амбра",
    desc: "Брутальний шкіряний аромат для сильного характеру. Димна береза та шляхетна замша створюють мужній шлейф.",
  },
  {
    id: "jasmin-imperial",
    name: "Jasmin Impérial",
    cat: "Парфумована вода",
    family: "Квіткові",
    gender: "Жіночий",
    price: 9900,
    old: null,
    rating: 5.0,
    reviews: 167,
    badge: "Бестселер",
    badgeGold: true,
    color: "linear-gradient(160deg, #9b5de5, #5b21a8)",
    notesShort: "Жасмин · Неролі · Мед",
    top: "Неролі, Мандарин",
    heart: "Жасмин, Апельсиновий цвіт",
    base: "Мед, Бензоїн, Мускус",
    desc: "П'янкий жасминовий букет із медовою солодкістю. Сонячний, розкішний і жіночний аромат імператорського саду.",
  },
];

const SIZES = [
  { ml: 30, factor: 0.55 },
  { ml: 50, factor: 1 },
  { ml: 100, factor: 1.7 },
];

/* ----------------------------- Helpers ----------------------------- */
const fmt = (n) => new Intl.NumberFormat("uk-UA").format(Math.round(n)) + " ₴";
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
      <button class="wish" aria-label="В обране" onclick="toggleWish(event, this)">♥</button>
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
        <button class="add-btn" aria-label="До кошика" onclick="quickAdd('${
          p.id
        }')">+</button>
      </div>
    </div>
  </article>`;
}

function quickAdd(id) {
  Cart.add(id, 1, 50);
  const p = getProduct(id);
  toast(`«${p.name}» додано до кошика`);
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

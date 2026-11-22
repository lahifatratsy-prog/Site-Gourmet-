/* ===== Gourmet : menu, prix fictifs en Ariary ===== */
const WHATSAPP = "261388486747";

const plats = [
  {
    nom: "Entrecôte tranchée aux pommes de terre rôties",
    desc: "Entrecôte saisie, quartiers de pommes de terre dorés au romarin.",
    prix: 38000,
    image: "images/plat-1.jpg",
    pos: "50% 50%",
    ingredients: [
      "Entrecôte de bœuf",
      "Pommes de terre en quartiers",
      "Romarin frais",
      "Ail",
      "Huile d’olive",
      "Fleur de sel",
      "Poivre noir et baies roses"
    ]
  },
  {
    nom: "Filet de bœuf, beurre à l’ail et frites",
    desc: "Filet nappé de beurre à l’ail, frites maison et tomates cerises.",
    prix: 42000,
    image: "images/plat-2.jpg",
    pos: "50% 58%",
    ingredients: [
      "Filet de bœuf",
      "Beurre à l’ail et aux herbes",
      "Persil",
      "Frites maison",
      "Tomates cerises sur vigne",
      "Jus de cuisson",
      "Sel et poivre"
    ]
  },
  {
    nom: "Côtelettes d’agneau",
    desc: "Côtelettes grillées, pommes de terre dorées et brocolis.",
    prix: 48000,
    image: "images/plat-3.jpg",
    pos: "50% 62%",
    ingredients: [
      "Côtelettes d’agneau",
      "Romarin",
      "Pommes de terre dorées",
      "Brocolis",
      "Huile d’herbes",
      "Ail",
      "Jus de cuisson",
      "Sel et poivre"
    ]
  },
  {
    nom: "Côte de bœuf à l’os",
    desc: "Côte de bœuf grillée, servie dans sa poêle en fonte.",
    prix: 65000,
    image: "images/plat-4.jpg",
    pos: "45% 50%",
    ingredients: [
      "Côte de bœuf avec os",
      "Beurre",
      "Ail",
      "Thym",
      "Fleur de sel",
      "Poivre noir"
    ]
  },
  {
    nom: "Entrecôte, purée et légumes rôtis",
    desc: "Entrecôte tranchée, purée onctueuse et légumes de saison rôtis.",
    prix: 40000,
    image: "images/plat-5.jpg",
    pos: "50% 50%",
    ingredients: [
      "Entrecôte de bœuf",
      "Purée de pommes de terre au beurre",
      "Choux de Bruxelles",
      "Poivrons rouges et jaunes",
      "Carottes violettes et jaunes",
      "Romarin",
      "Persil",
      "Piment doux"
    ]
  },
  {
    nom: "Entrecôte sauce chimichurri",
    desc: "Entrecôte saignante, tranchée et nappée de chimichurri frais.",
    prix: 44000,
    image: "images/plat-6.jpg",
    pos: "50% 50%",
    ingredients: [
      "Entrecôte de bœuf",
      "Persil plat",
      "Ail",
      "Origan",
      "Vinaigre de vin rouge",
      "Huile d’olive",
      "Piment",
      "Fleur de sel"
    ]
  },
  {
    nom: "Tarte aux fruits rouges",
    desc: "Tarte fondante au chocolat noir, garnie de fruits rouges frais.",
    prix: 18000,
    image: "images/plat-7.jpg",
    pos: "50% 50%",
    ingredients: [
      "Pâte sablée",
      "Chocolat noir",
      "Crème",
      "Beurre",
      "Framboises",
      "Myrtilles",
      "Groseilles",
      "Brin de romarin"
    ]
  },
  {
    nom: "Faux-filet grillé, frites et moutarde",
    desc: "Faux-filet grillé, frites dorées, champignon grillé et roquette.",
    prix: 39000,
    image: "images/plat-8.jpg",
    pos: "50% 50%",
    ingredients: [
      "Faux-filet de bœuf",
      "Frites maison",
      "Moutarde",
      "Champignon de Paris grillé",
      "Roquette",
      "Fleur de sel",
      "Poivre"
    ]
  },
  {
    nom: "Poulet grillé et potiron rôti",
    desc: "Poulet grillé, potiron caramélisé, jeunes pousses et sésame.",
    prix: 32000,
    image: "images/plat-9.jpg",
    pos: "50% 50%",
    ingredients: [
      "Blanc de poulet grillé",
      "Potiron rôti",
      "Roquette et jeunes pousses",
      "Graines de sésame",
      "Graines de tournesol",
      "Glaçage balsamique",
      "Huile d’olive",
      "Sel et poivre"
    ]
  }
];

const formatPrix = (n) => n.toLocaleString("fr-FR").replace(/\s| /g, "\u00A0") + "\u00A0Ar";
const lienWhatsApp = (message) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

/* ----- Cartes ----- */
const grid = document.getElementById("grid");

const iconeOeil =
  '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>';

grid.innerHTML = plats
  .map(
    (p, i) => `
    <article class="card">
      <button class="card__photo" type="button" data-i="${i}" aria-label="Voir les ingrédients : ${p.nom}">
        <img src="${p.image}" alt="${p.nom}" loading="lazy" style="object-position:${p.pos}">
      </button>
      <div class="card__body">
        <div class="card__stars" role="img" aria-label="Note : 4 sur 5">★★★★☆</div>
        <h3 class="card__name">${p.nom}</h3>
        <p class="card__desc">${p.desc}</p>
        <div class="card__foot">
          <span class="card__price">${formatPrix(p.prix)}</span>
          <button class="card__more" type="button" data-i="${i}">${iconeOeil} Ingrédients</button>
        </div>
      </div>
    </article>`
  )
  .join("");

/* ----- Fenêtre des ingrédients ----- */
const dish = document.getElementById("dish");
const dishImg = document.getElementById("dishImg");
const dishName = document.getElementById("dishName");
const dishPrice = document.getElementById("dishPrice");
const dishList = document.getElementById("dishList");
const dishOrder = document.getElementById("dishOrder");

function ouvrir(i) {
  const p = plats[i];
  dishImg.src = p.image;
  dishImg.alt = p.nom;
  dishImg.style.objectPosition = p.pos;
  dishName.textContent = p.nom;
  dishPrice.textContent = formatPrix(p.prix);
  dishList.innerHTML = p.ingredients.map((x) => `<li>${x}</li>`).join("");
  dishOrder.href = lienWhatsApp(`Bonjour, je souhaite commander : ${p.nom} (${formatPrix(p.prix)}).`);
  dish.showModal();
  document.body.style.overflow = "hidden";
}

function fermer() {
  dish.close();
}

grid.addEventListener("click", (e) => {
  const cible = e.target.closest("[data-i]");
  if (cible) ouvrir(Number(cible.dataset.i));
});

document.getElementById("dishClose").addEventListener("click", fermer);

/* Clic sur le fond sombre = fermeture */
dish.addEventListener("click", (e) => {
  if (e.target === dish) fermer();
});

dish.addEventListener("close", () => {
  document.body.style.overflow = "";
});

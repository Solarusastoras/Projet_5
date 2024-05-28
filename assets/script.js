// images et Textes dans un tableau
const slides = [
  {
    image: "./assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "./assets/images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "./assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "./assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Carousel image, texte, dots

let IndexActuel = 0;

function mettreAJourCarousel() {
  // Image affichée
  // Sélectionner l'élément image du carousel
  let ElementImage = document.querySelector(".banner-img");

  // Obtenir l'URL de l'image actuelle
  let urlImageActuelle = slides[IndexActuel].image;

  // Mettre à jour l'attribut 'src'
  ElementImage.src = urlImageActuelle;

  // Texte affichée
  // Sélectionner l'élément de texte du carousel
  let ElementTexte = document.querySelector("#banner p");

  // Obtenir le texte actuelle
  let texteActuel = slides[IndexActuel].tagLine;

  // Mettre à jour le contenu HTML de l'élément de texte avec le texte actuel
  ElementTexte.innerHTML = texteActuel;

  // Dots
  // Sélectionner tous les points du carousel
  let dots = document.querySelectorAll(".dot");

  // Parcourir chaque dots
  dots.forEach((dot, index) => {
    // Supprimer la classe 'dot_selected' du dots
    dot.classList.remove("dot_selected");

    // Si l'index dots correspond à l'index actuel
    if (index === IndexActuel) {
      // Ajouter la classe 'dot_selected' au point
      dot.classList.add("dot_selected");
    }
  });
}
//-----–----------------------------------------------
// Sélectionner les flèches gauche et droite

// Flèche gauche
// Mettre à jour le carousel
let arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener("click", function () {
  if (IndexActuel > 0) {
    IndexActuel -= 1;
  } else {
    // Sinon, aller à la dernière diapositive
    IndexActuel = slides.length - 1;
  }
  console.log("Flèche gauche cliquée");

  mettreAJourCarousel();
});

// Flèche droite
let arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener("click", function () {
  // Si l'index actuel est inférieur à la longueur des slides moins 1
  if (IndexActuel < slides.length - 1) {
    IndexActuel += 1;
  } else {
    IndexActuel = 0;
  }

  mettreAJourCarousel();

  console.log("Flèche droite cliquée");
});

//---------------------------------------------------
// faire apparaitre Dots dans les slides
let conteneurdots = document.querySelector(".dots");

// Parcourir chaque slide
slides.forEach((slide, index) => {
  // creation un nouvel élément div
  let dot = document.createElement("div");
  dot.classList.add("dot");

  // Définir l'index de la slide comme attribut de données de l'élément div
  dot.dataset.index = index;

  // Ajouter le dot à conteneurdots
  conteneurdots.appendChild(dot);
});

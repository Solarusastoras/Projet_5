// images et Textes
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

// Sélectionner les flèches gauche et droite
// Flèche gauche
let arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener ("click", function (){
console.log("Flèche gauche cliquée");
});

// Flèche droite
let arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener ("click", function (){
console.log("Flèche droite cliquée");
});


//Dots
// faire apparaitre Dots sous les images
let dotsContainer = document.querySelector(".dots");

// creation un nouvel élément div
let dot = document.createElement("div");
dot.classList.add("dot");

// Ajouter l'élément div au conteneur des points
dotsContainer.appendChild(dot);

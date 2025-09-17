

document.addEventListener("DOMContentLoaded", function () {
  // Menu hamburguer toggle
  const toggle = document.getElementById("menu-toggle");
  const navList = document.getElementById("nav-list");
  const header = document.querySelector("header");

  toggle.addEventListener("click", function () {
    navList.classList.toggle("active");
    header.classList.toggle("menu-open");
  });

  // Frases para placeholder rotativo
  const phrases = [
    "Vestidos midi",
  "Conjuntos femininos",
  "Promoções de primavera",
  "Blusas estampadas",
  "Calças wide leg",
  "Saias plissadas",
  "Macacões elegantes",
  "Roupas para casamento",
  "Look casual feminino",
  "Lançamentos da semana"
  ];

  const searchInput = document.getElementById("search-input");
  let currentIndex = 0;

  function rotatePlaceholder() {
    searchInput.placeholder = phrases[currentIndex];
    currentIndex = (currentIndex + 1) % phrases.length;
  }

  rotatePlaceholder(); // Mostrar a primeira frase
  setInterval(rotatePlaceholder, 4000); // Trocar a cada 4 segundos
});


const catalogo2 = [
"Fome? Expressa!",

"Pediu, chegou!",

"Sabor na hora!",

"Rápido e gostoso.",

"Seu prato, voando.",

"Tá na mão!",

"Express até no sabor.",

"Delivery sem espera.",

"Clicou, chegou!",

"Comida em minutos.",

"Zero espera.",

"Bateu a fome?",

"Chegou o rango!",

"Do app pra mesa.",

"Corre que tá quente!",

"Sabor na velocidade.",

"Comida turbo!",

"Fome não espera.",

"Vapt-vupt!",

"Só pedir!",
];



let indexCatalogo = 0;

const quoteElement2 = document.getElementById("catalogo");

function mostrarProximaFrase() {
  
  quoteElement2.style.transform = "translateY(-100%)";
  quoteElement2.style.opacity = 0;

  setTimeout(() => {
    
    
    quoteElement2.textContent = catalogo2[indexCatalogo];

    
    quoteElement2.style.transform = "translateY(100%)";

    setTimeout(() => {
    
      quoteElement2.style.transform = "translateY(0)";
      quoteElement2.style.opacity = 1;
    }, 50);
  }, 400);

  
  
  indexCatalogo = (indexCatalogo + 1) % catalogo2.length;
}

mostrarProximaFrase();
setInterval(mostrarProximaFrase, 4000);

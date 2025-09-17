const catalogo2 = [
  "Comida rápida. Sem enrolação.",
  "Entrou, pediu, chegou.",
  "Seu sabor começa aqui.",
  "Login feito, fome resolvida.",
  "ExpressEats: direto ao prato."
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

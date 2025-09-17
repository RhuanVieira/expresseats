
const frases = [
  
  "Estilo para brilhar todos os dias!",
  "Atendimento rápido via Whatsapp.",
"Frete grátis em todo o Brasil.",
"5% de desconto na primeira compra!"
];

let indexFrase = 0;


const quoteElement = document.getElementById("quote");


function mostrarProximaFrase() {
  quoteElement.style.transform = "translateY(-100%)";
  quoteElement.style.opacity = 0;
 

  setTimeout(() => {
    
    quoteElement.textContent = frases[indexFrase];
   

    quoteElement.style.transform = "translateY(100%)";
   

    setTimeout(() => {
      quoteElement.style.transform = "translateY(0)";
      quoteElement.style.opacity = 1;
     
    }, 50);
  }, 400);

  
  indexFrase = (indexFrase + 1) % frases.length;

}

mostrarProximaFrase();
setInterval(mostrarProximaFrase, 4000);


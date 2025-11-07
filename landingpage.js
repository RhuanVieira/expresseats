// POPUP CUPOM
  window.addEventListener("load", function() {
    setTimeout(() => {
      document.getElementById("popup-cupom").style.display = "flex";
    }, 1000);
  });
  document.getElementById("fecharPopup").addEventListener("click", function() {
    document.getElementById("popup-cupom").style.display = "none";
  });

 // SUGESTÕES DE ENDEREÇO (Fake para exemplo)
const enderecoInput = document.getElementById("enderecoInput");
const suggestionsBox = document.getElementById("suggestionsBox");
const sugestoesFake = [
  "Rua das Flores, 123 - Centro",
  "Avenida Paulista, 2000",
  "Rua Sete de Setembro, 450",
  "Rua Ari Barroso, 305"
];

enderecoInput.addEventListener("input", function() {
  const valor = this.value.trim();
  if (valor.length > 1) {
    suggestionsBox.innerHTML = "";
    sugestoesFake.forEach(end => {
      const item = document.createElement("div");
      item.classList.add("suggestion-item");

      // Cria o ícone
      const icon = document.createElement("i");
      icon.classList.add("fa-solid", "fa-location-dot");
      icon.style.color = "#fe6f59"; // laranja
      icon.style.marginRight = "10px";

      item.appendChild(icon);
      item.appendChild(document.createTextNode(end));

      // Clique seleciona o endereço
      item.addEventListener("click", () => {
        enderecoInput.value = end;
        suggestionsBox.style.display = "none";
      });

      suggestionsBox.appendChild(item);
    });
    suggestionsBox.style.display = "block";
  } else {
    suggestionsBox.style.display = "none";
  }
});

  // POPUP MAPA
  const buscarBtn = document.getElementById("buscarEndereco");
  const popupMapa = document.getElementById("popup-mapa");
  const closeMapa = document.getElementById("closeMapa");
  let map;

  buscarBtn.addEventListener("click", () => {
    const endereco = enderecoInput.value.trim();
    if(!endereco) return;

    popupMapa.style.display = "flex";

    // Inicializa mapa se ainda não inicializado
    if(!map){
      map = L.map('map').setView([-23.55052, -46.633308], 13); // Default São Paulo
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
    }

    // Geocodificação simples via Nominatim (OpenStreetMap)
    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(endereco)}`)
      .then(res => res.json())
      .then(data => {
        if(data && data.length>0){
          const lat = data[0].lat;
          const lon = data[0].lon;
          map.setView([lat, lon], 16);
          L.marker([lat, lon]).addTo(map);
        } else {
          alert("Endereço não encontrado!");
        }
      });
  });

  closeMapa.addEventListener("click", () => {
    popupMapa.style.display = "none";
  });

 const banners = document.querySelector('.banners');
const setaEsquerda = document.querySelector('.seta.esquerda');
const setaDireita = document.querySelector('.seta.direita');

let isDown = false;
let startX;
let scrollLeft;
let scrollTimeout;

function atualizarSetas() {
  const scrollLeftNow = banners.scrollLeft;
  const maxScroll = banners.scrollWidth - banners.clientWidth;
  if (scrollLeftNow > 0) { setaEsquerda.classList.add('mostrar'); } else { setaEsquerda.classList.remove('mostrar'); }
  if (scrollLeftNow < maxScroll) { setaDireita.classList.add('mostrar'); } else { setaDireita.classList.remove('mostrar'); }
}

function aplicarEfeitoRolagem() {
  banners.classList.add('scrolling');
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => banners.classList.remove('scrolling'), 300);
}

// 👉 Clique nas setas
setaEsquerda.addEventListener('click', () => {
  banners.scrollBy({ left: -400, behavior: 'smooth' });
  aplicarEfeitoRolagem();
});

setaDireita.addEventListener('click', () => {
  banners.scrollBy({ left: 400, behavior: 'smooth' });
  aplicarEfeitoRolagem();
});

// 👉 Arrastar com o mouse / dedo
banners.addEventListener('mousedown', (e) => {
  isDown = true;
  banners.classList.add('scrolling');
  startX = e.pageX - banners.offsetLeft;
  scrollLeft = banners.scrollLeft;
});

banners.addEventListener('mouseleave', () => { isDown = false; banners.classList.remove('scrolling'); });
banners.addEventListener('mouseup', () => { isDown = false; banners.classList.remove('scrolling'); });
banners.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - banners.offsetLeft;
  const walk = (x - startX) * 1.2; // Velocidade da rolagem
  banners.scrollLeft = scrollLeft - walk;
  aplicarEfeitoRolagem();
});

// 👉 Touch (mobile)
banners.addEventListener('touchstart', (e) => {
  isDown = true;
  startX = e.touches[0].pageX - banners.offsetLeft;
  scrollLeft = banners.scrollLeft;
}, { passive: true });

banners.addEventListener('touchend', () => { isDown = false; });
banners.addEventListener('touchmove', (e) => {
  if(!isDown) return;
  const x = e.touches[0].pageX - banners.offsetLeft;
  const walk = (x - startX) * 1.2;
  banners.scrollLeft = scrollLeft - walk;
  aplicarEfeitoRolagem();
}, { passive: true });

banners.addEventListener('scroll', atualizarSetas);
window.addEventListener('resize', atualizarSetas);
window.addEventListener('load', atualizarSetas);


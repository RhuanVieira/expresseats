// --- MENU HAMBÚRGUER RESPONSIVO ---
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    const isActive = navMenu.classList.toggle("active");

    // Troca o ícone dinamicamente
    menuToggle.innerHTML = isActive
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';
  });
}

// --- ANIMAÇÃO DO CARTÃO AO CARREGAR ---
window.addEventListener("DOMContentLoaded", () => {
  const cartao = document.querySelector(".cartao");
  if (cartao) {
    cartao.style.transition = "transform 0.8s ease, box-shadow 0.8s ease";
    cartao.style.transform = "scale(1.02)";
    setTimeout(() => {
      cartao.style.transform = "scale(1)";
      cartao.style.boxShadow = "none";
    }, 800);
  }
});
const popupCartao = document.getElementById("popupCartao");
const btnVerDados = document.getElementById("buscarEndereco");
const fecharPopupCartao = document.getElementById("fecharPopupCartao");

btnVerDados.addEventListener("click", () => {
  popupCartao.style.display = "flex";
});

fecharPopupCartao.addEventListener("click", () => {
  popupCartao.style.display = "none";
});

// Fecha se clicar fora do conteúdo
window.addEventListener("click", (e) => {
  if (e.target === popupCartao) {
    popupCartao.style.display = "none";
  }
});
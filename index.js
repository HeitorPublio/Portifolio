function mostrarModal(img) {
      const modal = document.getElementById("modal");
      const imagemModal = document.getElementById("imagemModal");
      imagemModal.src = img.src;
      modal.style.display = "flex";
    }

    function fecharModal() {
      document.getElementById("modal").style.display = "none";
    }
const cards = document.querySelectorAll(".card");
const descricao = document.getElementById("descricao");

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  const descricao = document.getElementById("descricao");

  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      descricao.innerHTML = card.getAttribute("data-text");
    });

    card.addEventListener("mouseleave", () => {
      descricao.textContent = "Passe o mouse sobre uma habilidade para ver a descrição aqui.";
    });
  });
});

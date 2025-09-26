function mostrarModal(img) {
      const modal = document.getElementById("modal");
      const imagemModal = document.getElementById("imagemModal");
      imagemModal.src = img.src;
      modal.style.display = "flex";
    }

    function fecharModal() {
      document.getElementById("modal").style.display = "none";
    }
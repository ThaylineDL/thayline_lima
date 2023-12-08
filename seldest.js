// Adiciona um evento de clique ao botão "Ver mais"
document.querySelector(".destinos li a").addEventListener("click", function() {
    // Obtém o destino selecionado
    const destino = this.dataset.destino;
  
    // Abre a página de detalhes do destino
    window.location.href = `destinos/${destino}`;
  });
  
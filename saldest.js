function salvarDestino() {
    // Obtém o destino selecionado
    const destino = document.querySelector(".destinos li.ativo").dataset.destino;
  
    // Salva o destino no localStorage
    localStorage.setItem("destino", destino);
  }
  
  // Adiciona um evento de clique ao botão "Salvar"
  document.querySelector(".destinos .salvar").addEventListener("click", salvarDestino);
  
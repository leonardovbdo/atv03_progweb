// Função para verificar e listar os números divisíveis por 3 em uma tabela
function listarNumerosDivisiveis() {
    const tabelaNumerosElement = document.getElementById('tabelaNumeros');
    let numerosPorLinha = 0;
    let newRow;
  
    for (let i = 0; i < 500; i++) {
      if (i % 3 === 0) {
        if (numerosPorLinha === 0) {
          // Se é o primeiro número da linha, cria uma nova linha
          newRow = tabelaNumerosElement.insertRow();
        }
  
        const cell = newRow.insertCell();
        cell.textContent = i;
        numerosPorLinha++;
  
        if (numerosPorLinha === 13) {
          numerosPorLinha = 0;
        }
      }
    }
  }
  
  // Executa a função após o carregamento da página
  window.addEventListener('load', listarNumerosDivisiveis);
  
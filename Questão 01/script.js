function verificarMultiplo() {
    // Solicitar um número inteiro
    const numero = prompt("Por favor, digite um número inteiro:");

    // Verificar se o número é válido
    if (numero === null || numero === "" || isNaN(numero)) {
      alert("Você não inseriu um número válido. Tente novamente.");
      return;
    }

    // Converter o número para inteiro
    const numeroInteiro = parseInt(numero);

    // Verificar se o número é múltiplo de 3 e 5 simultaneamente
    if (numeroInteiro % 3 === 0 && numeroInteiro % 5 === 0) {
      alert(numeroInteiro + " é um múltiplo de 3 e 5.");
    } else {
      alert(numeroInteiro + " não é um múltiplo de 3 e 5 simultaneamente.");
    }
  }
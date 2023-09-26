function calcular() {
  const numero1 = parseFloat(document.getElementById('numero1').value.replace(',', '.'));
  const numero2 = parseFloat(document.getElementById('numero2').value.replace(',', '.'));
  const operacao = document.getElementById('operacao').value;

  if (isNaN(numero1) || isNaN(numero2)) {
    alert("Por favor, preencha ambos os campos com números válidos.");
    return;
  }

  let resultado;

  switch (operacao) {
    case "+":
      resultado = numero1 + numero2;
      break;

    case "-":
      resultado = numero1 - numero2;
      break;

    case "*":
      resultado = numero1 * numero2;
      break;
      
    case "/":
      if (numero2 === 0) {
        alert("Não é possível dividir por 0.");
        return;
      }
      if (numero1 === 0) {
        alert("Não é possível dividir por 0.");
        return;
      }
      resultado = numero1 / numero2;
      break;
  }
      document.getElementById('result').value = resultado;

}

function identificarMaiorNumero() {
  const input1 = document.getElementById('numero1').value;
  const input2 = document.getElementById('numero2').value;

  if (input1 === "" || input2 === "") {
    alert("Por favor, preencha os campos");
    return;
  }

  const regex = /^\d+(\.\d+)?$/;

  if (!regex.test(input1) || !regex.test(input2)) {
    alert("Digite números válidos em formato americano (use o ponto como separador decimal).");
    return;
  }

  const numero1 = parseFloat(input1);
  const numero2 = parseFloat(input2);

  let maiorNumero;

  if (numero1 > numero2) {
    maiorNumero = numero1;
  } else {
    maiorNumero = numero2;
  }

  alert("O maior número é: " + maiorNumero);
}
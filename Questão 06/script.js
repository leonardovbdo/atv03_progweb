function isPrime(number) {
  if (number <= 1) return false;
  if (number <= 3) return true;
  if (number % 2 === 0 || number % 3 === 0) return false;
  for (let i = 5; i * i <= number; i += 6) {
      if (number % i === 0 || number % (i + 2) === 0) {
          return false;
      }
  }
  return true;
}

function verificarPrimo() {
  const inputElement = document.getElementById('numero');
  const inputValue = inputElement.value.trim();

  if (inputValue === '' || isNaN(inputValue) || parseInt(inputValue) !== parseFloat(inputValue)) {
      alert('Por favor, informe um número inteiro válido.');
  } else {
      const number = parseInt(inputValue);
      if (isPrime(number)) {
          alert(`${number} é um número primo.`);
      } else {
          alert(`${number} não é um número primo.`);
      }
  }
}
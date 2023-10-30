let numeros = [];
let total = 0;

function inserirNumero() {
    const numeroString = prompt("Insira um novo número (use o formato americano, com ponto decimal):");
    if (numeroString !== null) {
        const numero = parseFloat(numeroString);
        if (!isNaN(numero)) {
            numeros.push(numero);
            atualizarNumerosFornecidos();
        } else {
            alert("Por favor, insira um número válido.");
        }
    }
}

function atualizarNumerosFornecidos() {
    const numerosFornecidosElement = document.getElementById('numerosFornecidos');
    numerosFornecidosElement.value = numeros.join('\n');
}

function calcularSoma() {
    total = numeros.reduce((acc, val) => acc + val, 0);
    alert(`Soma dos números fornecidos: ${total}`);
}

function calcularMedia() {
    if (numeros.length > 0) {
        const media = total / numeros.length;
        alert(`Média aritmética dos números fornecidos: ${media}`);
    } else {
        alert("Nenhum número fornecido para calcular a média.");
    }
}
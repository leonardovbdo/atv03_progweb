let numeros = [];
let total = 0;

function inserirNumero() {
    let input = prompt("Digite um número (use ponto como separador decimal):");
    if (input !== null) {
        let number = parseFloat(input);
        if (!isNaN(number)) {
            numeros.push(number);
            total = numeros.reduce((acc, curr) => acc + curr, 0);
            atualizarCampos();
        } else {
            alert("Por favor, insira um número válido.");
        }
    }
}

function atualizarCampos() {
    document.getElementById("numeros").value = numeros.join(', ');
    document.getElementById("total").value = total.toFixed(2);
    document.getElementById("media").value = (total / numeros.length).toFixed(2);
}
function listarNumerosDivisiveis() {
    const numerosDivisiveisElement = document.getElementById('numerosDivisiveis');

    for (let i = 0; i < 500; i++) {
        if (i % 3 === 0) {
            const listItem = document.createElement('li');
            listItem.textContent = i;
            numerosDivisiveisElement.appendChild(listItem);
        }
    }
}

window.addEventListener('load', listarNumerosDivisiveis);
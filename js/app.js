let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    if (amigo.value == '') {
        alert('Você deve informar o nome do amigo!');
    }

    let lista = document.getElementById('lista-amigos');

    amigos.push(amigo.value);
    
    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value; 
    }

    limparInput();
}

function sortear() {
    if (amigos.length < 3) {
        alert('Precisa de pelo menos 3 amigos para fazer o sorteio!');
        return;
    }

    embaralha(amigos);

    let sorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
        }
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}

 function limparInput() {
    document.getElementById('nome-amigo').value = '';
 }
let amigos = []

function agregarAmigo() {
    let nombreDeUsuario = (document.getElementById("amigo").value);
    console.log(nombreDeUsuario)
    if (nombreDeUsuario == "") {
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(nombreDeUsuario);
        console.log(amigos)
        limpiarCaja();
        mostrarListaAmigos();

        document.getElementById("resultado").innerHTML = "";
    }
}

function limpiarCaja() {
    document.getElementById("amigo").value = "";
}

function mostrarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let amigoElemento = document.createElement("li");
        amigoElemento.textContent = amigos[i];
        listaAmigos.appendChild(amigoElemento);
    }
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    if (amigos == "") {
        alert("No has ingresado ningún nombre de un amigo");    
    } else {
        let indice = Math.floor(Math.random() * amigos.length);
        let nombreSorteado = amigos[indice];

        resultado.textContent = `El amigo secreto sorteado es: ${nombreSorteado}`;

        amigos = [];
        mostrarListaAmigos();
        limpiarCaja; 
    }
}
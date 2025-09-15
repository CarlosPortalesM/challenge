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
let amigos = []

function agregarAmigo() {
    let nombreDeUsuario = (document.getElementById("amigo").value);
    console.log(nombreDeUsuario)
    if (nombreDeUsuario == "") {
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(nombreDeUsuario);
        console.log(amigos)
        limpiarCaja()
    }
}

function limpiarCaja() {
    document.getElementById("amigo").value = "";
}
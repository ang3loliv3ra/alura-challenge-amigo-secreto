// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Agrega un nuevo amigo a la lista.
function agregarAmigo() {
    const nombre = obtenerNombre();
    if (!nombre) return;

    agregarALista(nombre, "listaAmigos");
}

// Obtiene y valida  el nombre agregado por el usuario.
function obtenerNombre() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor escribe un nombre que sea valido.");
        return null;
    }

    input.value = ""; // borra el input
    input.focus(); // enfoca el input
    return nombre;
}

// Muestra el nuevo amigo en la lista.
function agregarALista(nombre, listaId) {
    const lista = document.getElementById(listaId);
    const li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);
}

// Elige un amigo aleatoriamente.
function obtenerAmigoAleatorio() {
    const lista = document.getElementById("listaAmigos");
    const amigos = lista.querySelectorAll("li");

    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return null;
    }

    const indice = Math.floor(Math.random() * amigos.length);
    return amigos[indice].textContent;
}

// Muestra el amigo elegido aleatoriamente.
function mostrarResultado(amigo) {
    const resultado = document.getElementById("resultado");
    resultado.textContent = ""; // borra el resultado

    const li = document.createElement("li");
    li.textContent = `El amigo secreto sorteado es: ${amigo}`;
    resultado.appendChild(li);
}

// Sortea al amigo secreto y lo muestra.
function sortearAmigo() {
    const amigoSorteado = obtenerAmigoAleatorio();
    if (!amigoSorteado) return;
    mostrarResultado(amigoSorteado);
}

const audio = document.getElementById("audio");

function mostrarMensaje() {
alert("Bienvenido al mundo de Alex Rock 🎸");
}

function reproducir() {
audio.play();
}

function detener() {
audio.pause();
audio.currentTime = 0;
}

function mostrarContacto() {
document.getElementById("mensaje").textContent =
"Puedes encontrar a Alex Rock en sus redes sociales.";
}
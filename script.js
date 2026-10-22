
const audio = document.getElementById("audio");

function reproducir() {
audio.play();
}

function pausar() {
audio.pause();
}

function detener() {
audio.pause();
audio.currentTime = 0;
}
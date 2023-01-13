const menu = document.getElementById('menu');
document.addEventListener('click', musicPlay);

document.onkeydown = function(event) {
    if (event.code === "Enter") {
        document.removeEventListener('click', musicPlay);
        menu.style.visibility = "hidden";
        menu.style.pointerEvents = "none";
    }
}

function musicPlay() {
    document.getElementById('audio').play();
    document.removeEventListener('click', musicPlay);
}





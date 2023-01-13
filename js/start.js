const menu = document.getElementById('menu');
document.addEventListener('click', musicPlay);

window.addEventListener('load', function(){
    document.onkeydown = function(event) {
        if (event.code === "Enter") {
            location.href = "pokedex.html";
            document.removeEventListener('click', audio.play());
            menu.style.visibility = "hidden"; 
            menu.style.pointerEvents = "none";
        }
    }
})

document.onkeyup = function(event) {
    if (event.code === "KeyP") {
        var audio = document.getElementById('audio');
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    }
}

function musicPlay() {
    document.getElementById('audio').play();
    document.removeEventListener('click', musicPlay);
}





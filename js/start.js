const menu = document.getElementById('menu');
document.addEventListener('click', musicPlay);

window.addEventListener('load', function(){
    document.onkeydown = function(event) {
        if (event.code === "Enter") {
            location.href = "pokedex.html";
            document.removeEventListener('click', musicPlay);
            menu.style.visibility = "hidden";
            menu.style.pointerEvents = "none";
        }
    }
})

function musicPlay() {
    document.getElementById('audio').play();
    document.removeEventListener('click', musicPlay);
}





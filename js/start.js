const menu = document.getElementById('menu');

document.onkeydown = function(event) {
    if (event.code === "Enter") {
        menu.style.visibility = "hidden";
        menu.style.pointerEvents = "none";
    }
}



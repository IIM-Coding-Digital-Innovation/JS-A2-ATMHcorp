
document.onkeyup = function(event) {
    if (event.code === "KeyP") {
        var audio = document.getElementById('audio2');
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    }
}
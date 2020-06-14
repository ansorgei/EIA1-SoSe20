var allsamples = ["mp3/A.mp3", "mp3/C.mp3", "mp3/F.mp3", "mp3/G.mp3", "mp3/hihat.mp3", "mp3/kick.mp3", "mp3/laugh-1.mp3", "mp3/laugh-2.mp3", "mp3/snare.mp3"];

window.addEventListener("load", function () {
    document.querySelector("#but1").addEventListener("click", function () { playSample(0); });
    document.querySelector("#but2").addEventListener("click", function () { playSample(1); });
    document.querySelector("#but3").addEventListener("click", function () { playSample(2); });
    document.querySelector("#but4").addEventListener("click", function () { playSample(3); });
    document.querySelector("#but5").addEventListener("click", function () { playSample(4); });
    document.querySelector("#but6").addEventListener("click", function () { playSample(5); });
    document.querySelector("#but7").addEventListener("click", function () { playSample(6); });
    document.querySelector("#but8").addEventListener("click", function () { playSample(7); });
    document.querySelector("#but9").addEventListener("click", function () { playSample(8); });
    document.querySelector("#play")?.addEventListener("click", function () {beat;});
    function playSample(soundplay) {
        var sound = new Audio(allsamples[soundplay]);
        sound.play();

        
    }
    function beat () {
    setInterval (function () {
        playSample(4);
        playSample(5);
        playSample(8);
    },           300);
    }
    document.querySelector("#play").addEventListener("click", beat);
}

}});


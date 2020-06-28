"use strict";
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
    document.querySelector("#play2").addEventListener("click", play);
    document.querySelector("#trash").addEventListener("click", trash);
    function play() {
        var play = document.querySelector("#play2");
        if (play.getAttribute("class") == "fas fa-play") {
            play.setAttribute("class", "fas fa-pause");
            playbeats();
        }
        else {
            play2.className = "fas fa-play play-button";
            clearInterval(beatInterval);
        }
    }
    function trash() {
        beats = [];
        function playSample(soundplay) {
            var sound = new Audio(allsamples[soundplay]);
            sound.play(sound);
            var beat1 = ["mp3/kick.mp3", "mp3/snare.mp3", "mp3/hihat.mp3"];
            document.querySelector("#play2").addEventListener("click", function () { playbeats(beat1); });
            function playbeats(beat) {
                var i = 0;
                //window.alert(anzahl);
                setInterval(function () {
                    var Sample = new Audio(beat[i]);
                    Sample.play();
                    console.log(beat[i]);
                    i++;
                }, 500);
                var myinterval = setInterval(function () {
                    var sample = new Audio(beat[i]);
                    sample.play();
                    console.log(beat[i]);
                    i++;
                    if (i > 3) {
                        i = 0;
                    } //wenn i großer als 3 soll i wieder null werden
                }, 500);
                window.addEventListener("load", function () {
                    document.querySelector("#trash").addEventListener("click", trash);
                });
            }
        }
    }
});
//# sourceMappingURL=script.js.map
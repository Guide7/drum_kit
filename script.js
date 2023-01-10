window.onkeypress = function(event) {
    if (event.which == 32) {
        var audio = new Audio('sounds/kick.mp3')
        audio.play();
    }
    if (event.which == 115) {
        var audio = new Audio('sounds/snare.mp3')
        audio.play();
    }
    if (event.which == 100) {
        var audio = new Audio('sounds/hat.mp3')
        audio.play();
    }
    if (event.which == 102) {
        var audio = new Audio('sounds/crash.mp3')
        audio.play();
    }
    if (event.which == 103) {
        var audio = new Audio('sounds/tom.mp3')
        audio.play();
    }
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function game(){
    document.getElementById("drumkit").style.display="none";
    document.getElementById("startgame").style.display="none";

    document.getElementById("1").style.display="block";
    document.getElementById("2").style.display="block";
    document.getElementById("3").style.display="block";
    document.getElementById("4").style.display="block";
    document.getElementById("5").style.display="block";

    while(true){
        document.getElementById("1").style.backgroundColor = "#646262";
        document.getElementById("2").style.backgroundColor = "#646262";
        document.getElementById("3").style.backgroundColor = "#646262";
        document.getElementById("4").style.backgroundColor = "#646262";
        document.getElementById("5").style.backgroundColor = "#646262";

        let random = getRandomArbitrary(1, 5);

        document.getElementById(random).style.backgroundColor = "red";

        await sleep(getRandomInt(10) * 200);

        //if (document.onkeypress == 103) {
        //    var audio = new Audio('sounds/tom.mp3')
        //    audio.play();
        //}
    }
}
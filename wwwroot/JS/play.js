

function Alerta1() {
    alert("Texto a mostrar");
}

function Alerta2(mensaje) {
    alert(mensaje);
}

//var text = document.getElementById("mantra");

//text.addEventListener("click", changetext);
//function changetext() {
//    console.log("entra solicitud")
//    text.innerHTML = "Ocultar mantra"
//    text.style.color = "red";

//}



//switch (song) {
//    case 0:
//        var i = "./audio/Silencio.mp3";
//        break;
//    case 1:
//        var i = "./audio/formula_premas_om_shanti.mp3";
//        break;
//    case 2:
//        break;
//    case 3:
//        break;
//    default:

//}

//player.onclick = function () {

//    player.
//    var song = new Array(


//    )


//    for (int i = 0; ;  )
//    {

//    }


//}

//var song = new Array(
//    uno,dos,tres,cuatro,cinco,seis.siete,ocho,nueve
//);

//uno = document.getElementsByClassName('uno');
//dos = document.getElementsByClassName('dos');

//___________________________________________________________
let player = document.getElementById('player');
let dur = document.getElementById('dur');
let duracion = document.getElementById('duracion');


player.preload();



function iniPlay() {
    //let length = player.duration;
    //dur.max = length;
    

    player.play();
    //initProgressBar();
}
function iniStop() {
    player.pause();
}


function Vol50(xVol) {
    //xVol -= .1;

    //console.log("vol:" + xVol);
    //if (xVol < 0) {
    //    xVol = 1;
    //}

    player.volume = xVol;

}

function initProgressBar() {
    //console.log("entra a ini progress");

    let length = player.duration;
    let current_time = player.currentTime;
    let totalLength = calculateTotalValue(length)

    let st = document.getElementById('start-time');
    let et = document.getElementById('end-time');


    //jQuery(".end-time").html(totalLength);
    let currentTime = calculateCurrentValue(current_time);
    //jQuery(".start-time").html(currentTime);

    st.innerHTML = currentTime;
    et.innerHTML = totalLength;

    //dur.value = player.currentTime;
    //duracion.value = player.currentTime;

    //console.log(dur.value + " de "+ dur.max);
    console.log(player.currentTime + " de "+ dur.max);


    $("#dur").val(player.currentTime);

    //dur.value = player.currentTime;
};


function calculateTotalValue(length) {
    let minutes = Math.floor(length / 60),
        seconds_int = length - minutes * 60,
        seconds_str = seconds_int.toString(),
        seconds = seconds_str.substr(0, 2),
        time = minutes + ':' + seconds
    return time;
}


function calculateCurrentValue(currentTime) {
    let current_hour = parseInt(currentTime / 3600) % 24,
        current_minute = parseInt(currentTime / 60) % 60,
        current_seconds_long = currentTime % 60,
        current_seconds = current_seconds_long.toFixed(),
        current_time = (current_minute < 10 ? "0" + current_minute : current_minute) + ":" + (current_seconds < 10 ? "0" + current_seconds : current_seconds);
    return current_time;
}


function mSet() {
    var powerRanger = document.getElementById("dur");

    player.currentTime = powerRanger.value;

    console.log("dur:" + powerRanger.value);
}



function mDur() {
    let length = player.duration;
    dur.max = length;

    var powerRanger = document.getElementById("dur");
    powerRanger.max = length;

    console.log("Max:"+ length);

    //duracion.max = length;
}

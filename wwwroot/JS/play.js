﻿

function Alerta1() {
    alert("Texto a mostrar");
}

function Alerta2(mensaje) {
    alert(mensaje);
}

//___________________________________________________________



document.addEventListener("DOMContentLoaded", function () {
    // Tu código aquí
    let player = document.getElementById('player');
    let dur = document.getElementById('dur');
    let duracion = document.getElementById('duracion');
    

    if (player  !== null) {
        console.log("Esta cargado");
    } else {
        console.error("El elemento de audio no se encontró en el DOM.");
    }
});





function iniPlay() {
    //let length = player.duration;
    //dur.max = length;
    let titlesong = document.getElementById("titlesong");  
    player.play();
    titlesong.style.display = "block";
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

    let tamaño = player.duration;
    let current_time = player.currentTime;
    let totalLength = calculateTotalValue(tamaño)
    let currentTime = calculateCurrentValue(current_time);

    document.getElementById('start-time').innerHTML = currentTime ;
    document.getElementById('end-time').innerHTML = totalLength;


    
    
    //jQuery(".end-time").html(totalLength);
    
    //jQuery(".start-time").html(currentTime);

    /*st.innerHTML = currentTime;*/
    /*et.innerHTML = totalLength;*/
    
    //dur.value = player.currentTime;
    //duracion.value = player.currentTime;

    //console.log(dur.value + " de "+ dur.max);
    console.log(player.currentTime + " de "+ dur.max);


    $("#dur").val(player.currentTime);

    //dur.value = player.currentTime;
};


function calculateTotalValue(tamaño) {
    let minutes = Math.floor(tamaño / 60),
        seconds_int = tamaño - minutes * 60,
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
    let tamaño = player.duration;
    dur.max = tamaño;

    var powerRanger = document.getElementById("dur");
    powerRanger.max = tamaño;

    console.log("Max:" + tamaño);

    //duracion.max = length;
}

window.show_hidden = function () {
    var paragraph = document.getElementById("info");

    
    if (paragraph.style.display === "none") {
        document.getElementById("btnmantra").innerText = "Ocultar Mantra";
        paragraph.style.display = "block";
        
        
    }
    else {
        document.getElementById("btnmantra").innerText = "Ver Mantra";
        
        paragraph.style.display = "none";
        
        
    }
};

window.show_hidden1 = function () {
    var paragraph = document.getElementById("infor");


    if (paragraph.style.display === "none") {
        document.getElementById("btnsong").innerText = "Ocultar Cancion";
        paragraph.style.display = "block";


    }
    else {
        document.getElementById("btnsong").innerText = "Ver Cancion";

        paragraph.style.display = "none";


    }
};

//windows.Form_Show = function (){

//    var from_coment = document.getElementById("Form_coment");
//    from_coment.style.display = "flex";
//    from_coment.style.width = "400px";
//    from_coment.style.height= "400px";
    


//}
//window.obtensrc = function (image) {

//    return image.src;
//}

window.visorc = function () {
    var visor = document.getElementById("visorr");    
    visor.style.display = "none";
    
};

window.audio = [
    "imgopn", "imgopn", "imgopn"
];

window.ImgMax = function () {
    var contentimg = document.getElementById("imgx");
    var sizeimg = document.querySelectorAll(".imgopn");

    /*contentimg.style.transition = "width 5s ease, height 5s ease";*/
    contentimg.style.display="inline";  
    contentimg.classList.toggle('full-size');
    contentimg.style.justifyContent = "center";
    contentimg.style.height = "500px";
    contentimg.style.width = "80%";
    contentimg.style.margin = "50px 50px";
    contentimg.style.position = "relative";
    contentimg.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    
    //sizeimg.style.transition = "height 2s";
    //sizeimg.style.transition = "width 2s";
    sizeimg.forEach(function (sizeimg){
        sizeimg.style.height = "150px";
        sizeimg.style.width = "150px";
    });
    

};

window.Imgcls = function () {
    var contentimg = document.getElementById("imgx");
    var sizeimg = document.querySelectorAll(".imgopn");
    contentimg.style.display = "none";

    sizeimg.forEach(function (sizeimg) {
        sizeimg.style.height = "200px";
        sizeimg.style.width = "220px";
    });
};



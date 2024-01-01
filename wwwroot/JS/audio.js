

let playlist = [{
    'title': 'Silenciadasaso',
    'audio': "./audio/Silencio.mp3",
}, {
    'title': 'Mulholland - King Canyon',
    'audio': "./audio/Silencio.mp3",
}, {
    'title': 'Silencio',
    'audio': "./audio/Silencio.mp3",
}];
i = 0;
n = playlist.length;
let player = document.getElementById('player');
let dur = document.getElementById('dur');
playlist.forEach(function (i) {
    console.log(i.audio)
    player.src = i.audio;
    $('.title').html(i.title);
},);

function calculateTotalValue(length) {
    let minutes = Math.floor(length / 60),
        seconds_int = length - minutes * 60,
        seconds_str = seconds_int.toString(),
        seconds = seconds_str.substr(0, 2),
        time = minutes + ':' + seconds
    return time;
}

/****************** Asigna tiempo de inicio **************************/

function calculateCurrentValue(currentTime) {
    let current_hour = parseInt(currentTime / 3600) % 24,
        current_minute = parseInt(currentTime / 60) % 60,
        current_seconds_long = currentTime % 60,
        current_seconds = current_seconds_long.toFixed(),
        current_time = (current_minute < 10 ? "0" + current_minute : current_minute) + ":" + (current_seconds < 10 ? "0" + current_seconds : current_seconds);
    return current_time;
}

/*********************Asigna time de inicio y final*****************************/

function initProgressBar() {
    //console.log("entra a ini progress");

    let length = player.duration;
    let current_time = player.currentTime;
    let totalLength = calculateTotalValue(length)
    jQuery(".end-time").html(totalLength);
    let currentTime = calculateCurrentValue(current_time);
    jQuery(".start-time").html(currentTime);
    dur.value = player.currentTime;
    console.log("antes de play");
    if (player.currentTime == player.duration) {
        $("#play-btn").fadeIn("slow", function () {
            console.log("on play");
            $(this).removeClass("fa-pause");
            $(this).addClass("fa-play");
            dur.value = 0;
        });
    }
};

function mSet() {
    player.currentTime = dur.value;
}

function mDur() {
    let length = player.duration;
    dur.max = length;
}

function initPlayers(num) {
    // console.log("Inicio");
    for (let i = 0; i < num; i++) {
        (function () {
            let playerContainer = document.getElementById('player-container'),
                player = document.getElementById('player'),
                isPlaying = false,
                playBtn = document.getElementById('play-btn');
            if (playBtn != null) {
    console.log("botol play null");
                playBtn.addEventListener('click', function () {
                    console.log("Entra a evento de escucha play");
                    togglePlay()
                });
            }

            function togglePlay() {
                if (player.paused === false) {
                    player.pause();
                    isPlaying = false;
                    $("#play-btn").fadeIn("slow", function () {
                        $(this).removeClass("fa-pause");
                        $(this).addClass("fa-play");
                    });
                }
                else {
                    player.play();
                    $("#play-btn").fadeIn("slow", function () {
                        $(this).removeClass("fa-play");
                        $(this).addClass("fa-pause");
                    });
                    isPlaying = true;
                }
            }
        }());
    }
}


$(".audio-player")
    .toArray()
    .forEach(function (player) {
        let audio = $(player).find("audio")[0];
        let volumeControl = $(player).find(".volumeControl .wrapper");
        volumeControl.find(".outer").on("click", function (e) {
            let volumePosition = e.pageX - $(this).offset().left;
            let audioVolume = volumePosition / $(this).width();
            if (audioVolume >= 0 && audioVolume <= 1) {
                audio.volume = audioVolume;
                $(this)
                    .find(".inner")
                    .css("width", audioVolume * 100 + "%");
            }
        });
    });

initPlayers(jQuery('#player-container').length);


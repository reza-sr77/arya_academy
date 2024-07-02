var player = document.getElementById("player");
var progress = document.getElementById("progress");
document.getElementById('progress_player').value = 0;

player.addEventListener("timeupdate", function () {

    const result = new Date(Math.floor(player.currentTime) * 1000).toISOString().slice(11, 19);
    // console.log(result);

    document.getElementById('currentTime').innerHTML = result;
    document.getElementById('progress_player').value = (player.currentTime / player.duration) * 100;
});


function setnewTime(e) {
    console.log(e)
    console.log(player.currentTime)
    console.log(player.duration)
    player.currentTime = e * player.duration / 100;
}

function playsong() {
    document.getElementById('playBtn').style.display = "none"
    document.getElementById('pauseBtn').style.display = "flex"
    player.play();
}

function pausesong() {
    document.getElementById('playBtn').style.display = "flex"
    document.getElementById('pauseBtn').style.display = "none"
    player.pause(); 
}

function stopsong() {
    document.getElementById('playBtn').style.display = "flex"
    document.getElementById('pauseBtn').style.display = "none"
    player.pause();
    player.currentTime = 0;
}

function forwardAudio() {
    player.currentTime += 5.0;
}

function backwardAudio() {
    player.currentTime -= 5.0;
}
var audioId;
try{
	var socket = io();
    console.log("It's connected for playback");
} catch(e){
    console.log("It didn't try to connect: " + e);
}

function requestSong(audioId){
    socket.emit('stream', audioId)
    ss(socket).on('audio-stream', function(stream, data){
        parts = [];
        stream.on('data', (part) => {
            parts.push(part);
        })
        stream.on('end', function(){
            var audio = document.getElementById("audio");
            audio.src = (window.URL || window.webkitURL).createObjectURL(new Blob(parts));
            audio.play();
        })
    })
}
// FUTURE - When there is more than one player, run through a loop and register them all and apply the event listener as below passing their respective ID's through the requestSong function.
window.onload = function(){
    var player = document.getElementById("audio");
    var input = document.getElementById("audioInput");
    if(player && input){
        input.addEventListener("change", function(){
            audioId = input.value;
        })
        player.addEventListener("play", function(){
            requestSong(audioId);
        })
    }
}

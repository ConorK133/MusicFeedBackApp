try{
    var socket = io();
    console.log("It's connected for database");
} catch(e){
    console.log("It didn't try to connect" + e);
}
function addSong(){
    var song3 = {"title" : "Test Song 4", "artist" : "Tester", "genre" : "Rock", "Desc" : "Test song for testing", "audioId" : "4" };
    socket.emit('database', song3);
}

window.onload = function(){
    var button = document.getElementById('database');
    if(button){
        button.addEventListener('click', function(){
            addSong();
        })
    }
}

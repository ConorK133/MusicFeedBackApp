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
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}
addLoadEvent(function(){
    console.log("MDB-test window loaded");
    var button = document.getElementById('database');
    if(button){
        button.addEventListener('click', function(){
            addSong();
        })
    }
})

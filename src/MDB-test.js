try{
    var socket = io();
    console.log("Connected to local");
} catch(e){
    console.log("Didn't connect");
}
function createDatabase(){
    socket.emit('database', {my:"data"});
}

window.onload = function(){
    var button = document.getElementById('database');
    if(button){
        button.addEventListener('click', function(){
            createDatabase();  
        })
    }
}
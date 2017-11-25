/**
 * http://usejsdoc.org/
 */
var songlist = [];

try{
	var socket = io();
} catch(e){}

function submitSong(elmID)
{
	var formData = new FormData();
	var song = {};
	var x = document.getElementById("my_form");

	for (var i = 0; i < x.elements.length; i++) {
		song[x.elements[i].name] = x.elements[i].value;
	}

	console.log("hhhhheerererer")
	songlist.push(song);
	printSongList();
}

function printSongList(){
	socket.emit('input', JSON.stringify(songlist[songlist.length-1]));
}
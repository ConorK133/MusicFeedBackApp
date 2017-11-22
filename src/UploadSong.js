/**
 * http://usejsdoc.org/
 */
var songlist = [];

function submitSong(elmID)
{
	var formData = new FormData();
	var song = {};
	var x = document.getElementById("my_form");

	for (var i = 0; i < x.elements.length; i++) {
		song[x.elements[i].name] = x.elements[i].value;
	}

	songlist.push(song);
	//printSongList();
}

function printSongList(){
	for(var i = 0; i < songlist.length; i++)
	{
		console.log(JSON.stringify(songlist[i]));
	}
}
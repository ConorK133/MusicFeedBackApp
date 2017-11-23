/*
 * Script is not used at all yet.
 */

var fs = require('fs');
// TEMP - save list of local songs of an array/list
var path = require('path');
var musicFolder = path.resolve('src/music/');
var songList = ['test.mp3', 'test2.mp3','test3.mp3', 'test4.mp3'];

// Return audio source based on id provided
function playSong(req, res){
	// TEMP - grab the value passed via the html input
	var audioId = Object.keys(req.query)[0];
	res.sendFile(songList[audioId], options = { root: musicFolder });

	// FUTURE
	// Query database for song with matching ID and return via res.sendFile();
}

module.exports = {playSong}
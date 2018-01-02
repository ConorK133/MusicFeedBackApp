/*
 * https://github.com/zoutepopcorn/audio_socket/tree/master
 */

// TEMP - save list of local songs of an array/list
var path = require('path');
var musicFolder = path.resolve('src/music/');
var songList = ['/test.mp3', '/test2.mp3','/test3.mp3', '/test4.mp3'];

var fs = require('fs');
var ss = require('socket.io-stream');

exports = module.exports = function(io){
    io.on('connection', function(socket){
      console.log("Music Socket Connection established");
        socket.on('stream', function(data){
            console.log("Streaming data");
            var stream = ss.createStream();
            var filename = musicFolder + songList[data];
            ss(socket).emit('audio-stream', stream, {name: filename});
            fs.createReadStream(filename).pipe(stream);
        })
    })
}

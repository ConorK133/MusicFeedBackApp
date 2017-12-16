// Declaring all of our dependancies
var express  = require('express');
var app      = express();
var http = require('http').Server(app);
// Socket IO set up
var io = require('socket.io')(http);
var musicSocket = io.of('/play-music');
var databaseSocket = io.of('/database');

var fs = require('fs');
var ss = require('socket.io-stream');

app.use(express.static(__dirname + '/'));

// routes
require('./app/routes.js')(app);
http.listen(6001);

var playmusic = require('./src/PlayMusic.js')(io);
var makedatabase = require('./src/MongoDB-init.js')(io);

console.log('The Application is launched on 6001');

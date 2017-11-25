// Declaring all of our dependancies 
var express  = require('express');
var app      = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/'));

// routes 
require('./app/routes.js')(app); 
http.listen(6001);


io.on('connection', function(socket){
	console.log('connected');
	
	socket.on('input', function(data){
		console.log("33333333333333333")
		console.log(data);
	})
	socket.on('disconnect', function(){})
})

console.log('The Application is launched on 6001');

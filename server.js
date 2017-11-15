// Declaring all of our dependancies 
var express  = require('express');
var http = require('http')
var app      = express();



app.use(express.static(__dirname + '/'));


// routes 
require('./app/routes.js')(app); 
app.listen(6001)
console.log('The Application is launched on ');

var hello = require('../src/hello');
var path = require('path');

module.exports = function(app) {
	//Show HomePage
	app.get('/', function(req, res) {
		var indexPath = path.resolve('views/index.html');
		res.sendFile(indexPath)
		//res.send("hello lad");
	});	
	
	app.get('/twat', function(req, res) {
		res.send("youre a twat");
	});	
	
	app.get('/hello', function(req, res) {
		res.send("helol");
		hello.helloworld();

		hello.helloworld2();
	});	
}
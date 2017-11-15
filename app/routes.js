module.exports = function(app) {
	//Show HomePage
	app.get('/', function(req, res) {
		res.send("hello lad");
	});	
	
	app.get('/twat', function(req, res) {
		res.send("youre a twat");
	});	
}
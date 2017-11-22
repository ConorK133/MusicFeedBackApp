var path = require('path');
//var playmusic = require("../src/PlayMusic.js");

module.exports = function(app) {
	//Show HomePage
	app.get('/', function(req, res) {
		var indexPath = path.resolve('views/index.html');
		res.sendFile(indexPath)
	});	
    app.get('/play', function(req, res){
        res.sendFile(path.resolve('views/play.html'));
    });
    app.get('/playmusic', function(req, res){
        // In the future call a function from PlayMusic that returns this information.
        res.sendFile('test.mp3', options = { root: 'C:/Projects/MusicFeedBackApp/src/music/'});
    });
}
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

var song = { "title" : "My Test Song", "artist" : "Tester", "genre" : "Rock", "Desc" : "Test song for testing", "audioId" : "1" };

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    console.log("Database created");
    db.createCollection("songs", function(err, res){
        if(err) throw err;
        db.close();
    });
});
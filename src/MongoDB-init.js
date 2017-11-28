var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

var song = { "title" : "My Test Song", "artist" : "Tester", "genre" : "Rock", "Desc" : "Test song for testing", "audioId" : "1" };

exports = module.exports = function(io){
    io.on('connection', function(socket){
        socket.on('database', function(){
            MongoClient.connect(url, function(err, db){
                if(err) throw err;
                console.log("Database created");
                db.createCollection("songs", function(err, res){
                    if(err) throw err;
                    // Add to collection
                    db.collection('songs').insert(song, function(err, res){
                        if(err) throw err;
                        console.log("Song inserted");
                    });
                    // Query collection
                    db.collection('songs').findOne({}, function(err, res){
                        if(err) throw err;
                        console.log("Song returned: " + res.title, res.audioId, res.genre);
                    });
                    db.close();
                });
            });
        });
    });
}
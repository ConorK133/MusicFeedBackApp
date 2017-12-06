var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var MongoClient = require('mongodb').MongoClient;
// URL to our database.
var MONGO_URL = "mongodb://MusicFeedBackApp:1677104@ds129906.mlab.com:29906/musicfeedbackapp";

exports = module.exports = function(io){
    io.on('connection', function(socket){
        socket.on('database', function(song){
            MongoClient.connect(MONGO_URL, function(err, db){
                console.log("Connection complete");
                if(err){
                    console.log("ERROR: " + err);
                    throw err;
                }
                checkSongExists(song);
                // Check if song exists in database by audioId.
                function checkSongExists(song){
                    // Query for findOne must be an object.
                    db.collection('songs').findOne({audioId:song.audioId}, function(err, result){
                        if(err){
                            console.log("ERROR: " + err);
                            throw err;
                        }
                        // Check if the collection contains any documents, if it does, continue...
                        if(result != null){
                            // then check if song you're attempting to add is already in the database.
                            if(song.audioId != result.audioId){
                                addSong(song);
                            }
                        }
                        // If the collection has no documents then add the song.
                        else if(result == null){
                            addSong(song);
                        }
                    });
                }
                // Add to collection
                function addSong(song){
                    db.collection('songs').insert(song, function(err, res){
                        if(err) {
                            console.log("ERROR: " + err)
                            throw err;
                        }
                    });
                    db.close();
                }
            });
        });
    });
}

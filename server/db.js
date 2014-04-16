/*
 *
 * Database-related functions for timetracker
 *
 * Author: Markus Klinga
 *
 */

var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', console.error.bind(console, "connection error"));
db.once('open', function() {
	console.log("A connection to mongo database has been made!");
});

console.log("here");

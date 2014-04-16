/*
 *
 * Database-related functions for timetracker
 *
 * Author: Markus Klinga
 *
 */

var mongoose = require("mongoose");

/*
 *
 * Mongodb schemas
 *
 */

var userSchema = mongoose.Schema({
	id: Number,
	name: String
});

var timeSchema = mongoose.Schema({
	id: Number,
	title: String,
	type: String,
});

var historySchema = mongoose.Schema({
	userId: Number,
	timerId: Number,
	begin: Number,
	end: Number
});

/* mongoose Models */
var User, Time, History;

/* Connect to mongo database */
mongoose.connect('mongodb://localhost/test');

/* Database handle */
var mongoDB = mongoose.connection;

mongoDB.once('open', function() {
	/* Our connection to database is now opened! */
	historySchema.methods.findAllFromSameUser = function (cb) {
		console.log(this.userId);
		return this.model('History').find({ userId: this.userId }, cb);
	};

	User = mongoose.model('User', userSchema);
	Time = mongoose.model('Time', timeSchema);
	History = mongoose.model('History', historySchema);
});

mongoDB.on('error', console.error.bind(console, "connection error"));

/*
 *
 * Handler functions
 *
 */

var getAllHistory = exports.getAllHistory = function(userId, cb) {
	History.find({ userId: userId }, function(err, histories) {
		if (err) return console.error(err);
		cb(histories);
	});

};

function addNewHistory(historyItem) {
	var history = new History({
		userId: historyItem.userId,
		timerId: historyItem.timerId,
		begin: historyItem.begin,
		end: historyItem.end
	});

	history.save(function(err, item) {
		if (err) return console.error(err);

		console.log("Saved a new item to history: ");
		console.log(history);
	});
}

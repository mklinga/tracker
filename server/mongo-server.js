/*
 * Mongo-server for timetracker
 *
 * Provides a REST API at port ???
 *
 * Author: Markus Klinga
 *
 */

var restify = require("restify");
var db = require("./db.js");

/* Mock data for "times" */
var times = {
	"1": {
		"title": "Work",
		"type": "Continuous",
		"goal": {
			"amount": 37.5,
			"timeFrame": "week"
		},
		"history": []
	},
	"2": {
		"title": "Fun",
		"type": "Instanceous",
		"goal": {
			"amount": 3,
			"timeFrame": "week"
		},
		"history": [
			{ 'begin': 1979000, 'end': 1979000},
			{ 'begin': 1999000, 'end': 1999000},
		]
	}
};

function getAllTimes(req, res, next) {
	var authenticatedUser = 1;

	if (authenticatedUser) {
		db.getAllHistory(authenticatedUser, function(history) {
			times[authenticatedUser].history = history;

			res.header("Access-Control-Allow-Origin", "*");
			res.header("Access-Control-Allow-Headers", "X-Requested-With");

			var allTimes = JSON.stringify(times);
			res.send(allTimes);
			next();
		});

	}
}

function respond(req, res, next) {

	res.header("Access-Control-Allow-Origin", "*"); 
	res.header("Access-Control-Allow-Headers", "X-Requested-With");

	var responseText = JSON.stringify("Hello " + req.params.name);
	res.send(responseText);
	next();
}

var server = restify.createServer();
server.get("/api/times", getAllTimes);
//server.head("/hello/:name", respond);

server.post("/hello", function create(req, res, next) {
	res.send(201, Math.random().toString(36).substr(3, 8));
	return next();
});

server.listen(8080, function () {
	console.log("%s listening at %s", server.name, server.url);
});

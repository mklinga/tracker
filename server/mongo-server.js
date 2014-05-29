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

/* Mock data */
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

function getAllProjects(req, res, next) {
	// TODO: authentication
	var authenticatedUser = 1;

	if (authenticatedUser) {
		db.getAllProjects(authenticatedUser, function(projects) {
			//times[authenticatedUser].history = history;

			res.header("Access-Control-Allow-Origin", "*");
			res.header("Access-Control-Allow-Headers", "X-Requested-With");

			var allProjects = JSON.stringify(projects);
			res.send(allProjects);
			next();
		});

	}
}

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

var server = restify.createServer();
server.get("/api/times", getAllTimes);
server.get("/api/projects", getAllProjects);
//server.head("/hello/:name", respond);

server.listen(8080, function () {
	console.log("%s listening at %s", server.name, server.url);
});

/*
 * Mongo-server for timetracker
 *
 * Provides a REST API at port ???
 *
 * Author: Markus Klinga
 *
 */


var restify = require("restify");


function respond(req, res, next) {

	res.header("Access-Control-Allow-Origin", "*"); 
	res.header("Access-Control-Allow-Headers", "X-Requested-With");

	var responseText = JSON.stringify("Hello " + req.params.name);
	res.send(responseText);
	next();
}

var server = restify.createServer();
server.get("/hello/:name", respond);
server.head("/hello/:name", respond);

server.post("/hello", function create(req, res, next) {
	res.send(201, Math.random().toString(36).substr(3, 8));
	return next();
});

server.listen(8080, function () {
	console.log("%s listening at %s", server.name, server.url);
});

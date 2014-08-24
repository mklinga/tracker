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

var projectSchema = mongoose.Schema({
	userId: Number,
	projectId: Number,
	name: String,
	description: String
});

var timeSchema = mongoose.Schema({
	id: Number,
	title: String,
	type: String,
});

var historySchema = mongoose.Schema({
	userId: Number,
	timerId: Number,
	projectId: Number,
	begin: Number,
	end: Number
});

/* mongoose Models */
var User, Time, History, Project;

/* Connect to mongo database */
mongoose.connect('mongodb://localhost/test');

/* Database handle */
var mongoDB = mongoose.connection;

mongoDB.once('open', function() {
	/* Our connection to database is now opened! */
	historySchema.methods.findAllFromSameUser = function (cb) {
		return this.model('History').find({ userId: this.userId }, cb);
	};

	User = mongoose.model('User', userSchema);
	Time = mongoose.model('Time', timeSchema);
	History = mongoose.model('History', historySchema);
	Project = mongoose.model('Project', projectSchema);

});

mongoDB.on('error', console.error.bind(console, "connection error"));

/*
 *
 * Handler functions
 *
 */

/*
 *
 * Projects
 *
 */

var getAllProjects = exports.getAllProjects = function(id, cb) {
	Project.find({ "userId": id }, function(err, projects) {
		if (err) return console.error(err);
		cb(projects);
	});
};

var createNewProject = exports.createNewProject = function(projectItem) {
	var project = new Project({
		userId: projectItem.userId,
		projectId: projectItem.projectId,
		name: projectItem.name,
		description: projectItem.description
	});

	project.save(function(err, item) {
		if (err) return console.error(err);
		console.log("Saved new project!");
	});
}

/*
 *
 * History
 *
 */

var getAllHistory = exports.getAllHistory = function(userId, cb) {
	History.find({ userId: userId }, function(err, histories) {
		if (err) return console.error(err);
		cb(histories);
	});
};

var getProjectHistory = exports.getProjectHistory = function(userId, projectId, cb) {
	History.find({ userId: userId, projectId: projectId }, function(err, histories) {
		if (err) return console.error(err);
		cb(histories);
	});
};

function addNewHistory(historyItem) {
	var history = new History({
		userId: historyItem.userId,
		timerId: historyItem.timerId,
		projectId: historyItem.projectId,
		begin: historyItem.begin,
		end: historyItem.end
	});

	history.save(function(err, item) {
		if (err) return console.error(err);

		console.log("Saved a new item to history: ");
	});
}

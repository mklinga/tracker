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

	console.log("Mongoose is open!");
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
		name: projectItem.name,
		description: projectItem.description
	});

	project.save(function(err, item) {
		if (err) return console.error(err);
		console.log("Saved new project!");
	});
}

var removeProject = exports.removeProject = function(projectId) {
	
	Project.findByIdAndRemove({ _id: mongoose.Types.ObjectId(projectId) }, function(err, obj) {
		if (err) return console.error(err);
		console.log("Removed project: " + projectId);
	});
}

var updateProject = exports.updateProject = function(projectItem) {
	var project = new Project();

	Project.findByIdAndUpdate(mongoose.Types.ObjectId(projectItem._id), { $set: { 'name': projectItem.name, 'description': projectItem.description }}, function(err, obj) {
		if (err) console.log(err);
		console.log("Updated project: " + projectId);
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

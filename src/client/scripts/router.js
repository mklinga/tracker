define([ 'jquery', 'underscore', 'backbone', 'controllers/history', 'controllers/project' ],

function($, _, Backbone, HistoryListController, ProjectListController){

	/* Application Router */
	var AppRouter = Backbone.Router.extend({
		routes: {
			'': 'project',
			'history/:projectId': 'history',
			'projects': 'project',
			// 'settings': 'settings',
		},
		dashboard: function() {
			/* index */
			console.log("dash");
		},
		project: function() {
			var projectListController = new ProjectListController();
			//var projectListView = new ProjectListView();
			//$("main").empty().html("<h2>Projects</h2>");
			//$("main").append(projectListView.render().el);
		},
		history: function(projectId) {
			console.log("history: " + projectId);
			var historyListController = new HistoryListController(projectId);
		},

		settings: function() {
			// $("main").html("Set things");
		}
	});


  var initialize = function(){

    var app_router = new AppRouter();

	/* Start logging history */
    Backbone.history.start();

	console.log("Routes are going strong!");
  };

  return {
    initialize: initialize
  };
});

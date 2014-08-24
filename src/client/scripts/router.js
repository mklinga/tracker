define([ 'jquery', 'underscore', 'backbone', 'controllers/history', 'views/project' ],

function($, _, Backbone, HistoryListController, ProjectListView){

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
			var projectListView = new ProjectListView();
		},
		history: function(projectId) {
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

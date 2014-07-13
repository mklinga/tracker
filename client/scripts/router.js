define([ 'jquery', 'underscore', 'backbone', 'controllers/history', 'views/projects' ],

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
		},
		project: function() {
			var projectListView = new ProjectListView();
			$("main").empty().html("<h2>Projects</h2>");
			$("main").append(projectListView.render().el);
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

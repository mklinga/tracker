define([ 'jquery', 'underscore', 'backbone', 'views/times', 'views/projects' ],

function($, _, Backbone, HistoryListView, ProjectListView){

	/* Application Router */
	var AppRouter = Backbone.Router.extend({
		routes: {
			'': 'project',
			'times/:projectId': 'history',
			'projects': 'project',
			// 'settings': 'settings',
		},
		dashboard: function() {
			/* index */
		},
		project: function() {
			var projectListView = new ProjectListView();
			$("#timetable").empty().html("<h2>Projects</h2>");
			$('#timetable').append(projectListView.render().el);
		},
		history: function(projectId) {
			var historyListView = new HistoryListView({id: projectId});
			$("#timetable").html(historyListView.render().el);
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

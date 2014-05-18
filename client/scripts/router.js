define([ 'jquery', 'underscore', 'backbone', 'views/times/list' ],

function($, _, Backbone, HistoryListView){

	/* Application Router */
	var AppRouter = Backbone.Router.extend({
		routes: {
			// '': 'dashboard',
			'times': 'history',
			// 'settings': 'settings',
		},
		dashboard: function() {
			/* index */
		},
		history: function() {
			var historyListView = new HistoryListView();
			$("#timetable").empty().html("<h2>Times like that</h2>");
			$('#timetable').append(historyListView.render().el);
		},

		settings: function() {
			// $("main").html("Set things");
		}
	});


  var initialize = function(){

    var app_router = new AppRouter();

	/* Start logging history */
    Backbone.history.start();

	console.log("Routes are going on!");
  };

  return {
    initialize: initialize
  };
});

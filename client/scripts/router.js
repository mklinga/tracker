// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  // 'views/projects/list',
  // 'views/users/list'
], function($, _, Backbone){

	/* 
	 *
	 * Router
	 *
	 */

	var AppRouter = Backbone.Router.extend({
		routes: {
			'': 'dashboard',
			'times': 'times',
			'settings': 'settings',
		},
		dashboard: function() {
			/* index */
		},
		times: function() {
			$("#timetable").empty().html("<h2>Times</h2>");

			$.get("https://localhost/tt/api/times", function( data ) {
				/* TODO: validate recieved data */
				var parsedData = JSON.parse(data);

				/* TODO: don't save to window. */
				window.historyCollection = new App.Collections.HistoryCollection();

				for (var index in parsedData) {
					for (var hist in parsedData[index].history) {
						var historyItem = new App.Models.History({
							begin: parsedData[index].history[hist].begin,
							end: parsedData[index].history[hist].end
						});

						window.historyCollection.add(historyItem);
					}
				}
				
				/* render times in the screen */
				var hlv = new App.Views.HistoryListView({collection: window.historyCollection});
				$('#timetable').append(hlv.render().el);

			});
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

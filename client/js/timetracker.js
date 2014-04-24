$( document ).ready(function() {

	/* Create our application */
	window.App = {
		Models: {},
		Collections: {},
		Views: {},
		Router: {}
	};

	/*
	 *
	 * Models
	 *
	 */
	
	/* History item */
	App.Models.History = Backbone.Model.extend({
		defaults: {
			userId: 0,
			timerId: 0,
			begin: 0,
			end: 0
		},
	});

	/* User */
	App.Models.User = Backbone.Model.extend({
		defaults: {
			id: 0,
			name: "John"
		}
	});

	/* 
	 *
	 * Router
	 *
	 */

	App.Router = Backbone.Router.extend({
		routes: {
			'': 'dashboard',
			'times': 'times',
			'settings': 'settings',
		},
		dashboard: function() {
			var a = new App.Models.History();
			a.print();
		},
		times: function() {
			$.get("https://localhost/tt/api/times", function( data ) {
				var parsedData = JSON.parse(data);

				$("#timetable").empty().html("<thead><tr><th>Times</th><th>Title</th></tr></thead><tbody>");

				/* Listataan ajat taulukkoon */
				for (var time in parsedData) {
					$("#timetable").append("<tr>" +
						"<td>" + parsedData[time].history.length + "</td>" +
						"<td>" + parsedData[time].title + "</td>" + 
						"</tr>");
				}

				$("#timetable").append("</tbody>");
			});
		},

		settings: function() {
			// $("main").html("Set things");
		}
	});

	/* Initialize our router */
	new App.Router();

	/* Start logging history (needed by router) */
	Backbone.history.start();

	/* All done! */
	console.log("Document ready.");
});

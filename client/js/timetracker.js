$( document ).ready(function() {

	/* Create our application */
	window.App = {
		Models: {},
		Collections: {},
		Views: {},
		Router: {}
	};

	/* Create router */
	App.Router = Backbone.Router.extend({
		routes: {
			'times': 'times',
			'show': 'show',
		},
		times: function(){
			$.get("http://localhost:8080/api/times", function( data ) {
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

		show: function(){
			$("main").html("SHOWTIME");
		}
	});

	/* Initialize our router */
	new App.Router();

	/* Start logging history (needed by router) */
	Backbone.history.start();

	/* All done! */
	console.log("Document ready.");
});

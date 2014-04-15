function init_backbone() {

	window.App = {
		Models: {},
		Collections: {},
		Views: {},
		Router: {}
	};

	App.Router = Backbone.Router.extend({
		routes: {
			'': 'index',
			'show': 'show',
		},
		index: function(){
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

	new App.Router();
	Backbone.history.start();

}

$( document ).ready(function() {

	init_backbone();
	console.log("Document ready.");
});

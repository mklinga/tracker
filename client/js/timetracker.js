$( document ).ready(function() {

	$.get("http://localhost:8080/api/times", function( data ) {
		var parsedData = JSON.parse(data);

		$("#timetable").empty().html("<thead><tr><th>Times</th><th>Title</th></tr></thead>");

		for (var time in parsedData) {
			$("#timetable").append("<tbody><tr><td>" + parsedData[time].history.length + "</td><td>" + parsedData[time].title + "</td></tr></tbody>");
		}
	});

	console.log("I'm right here!");
});

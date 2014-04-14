$( document ).ready(function() {

	$.get("http://localhost:8080/api/times", function( data ) {
		var parsedData = JSON.parse(data);

		$("main").html("<h2>Times so far</h2>");

		for (var time in parsedData) {
			$("main").append(parsedData[time].history.length + "x " + parsedData[time].title + "<br/>");
		}
	});

	console.log("I'm right here!");
});

$( document ).ready(function() {
	$("header").html("Hallo");

	$.get("http://localhost:8080/hello/markus", function( data ) {
		$("main").html(data);
	});

	console.log("I'm right here!");
});

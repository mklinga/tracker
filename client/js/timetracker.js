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
			timerId: 9,
			begin: 1,
			end: 2
		},
	});

	/* User */
	App.Models.User = Backbone.Model.extend({
		defaults: {
			id: 0,
			name: "John"
		},
		validate: function(attributes) {
			if (!attributes.name)
				return "User must have a name!";

			if (attributes.id < 0)
				return "Id cannot be negative!";
		}
	});

	/*
	 *
	 * Views
	 *
	 */
	
	App.Views.Times = Backbone.View.extend({
		tagName: 'li',
	
		template: _.template( $("#testTemplate").html()),

		initialize: function() {
			this.render();
		},

		render: function() {
			this.$el.html( this.template(this.model.toJSON()));
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
			/* index */
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

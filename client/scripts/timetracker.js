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
	 * Collections
	 *
	 */
	
	/*
	 *
	 * Views
	 *
	 */
	
	

	/* All done! */
	console.log("Document ready.");
});

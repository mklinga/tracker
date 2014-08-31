define([ 'underscore', 'backbone' ], function(_, Backbone){
	/* Project */
	var ProjectModel = Backbone.Model.extend({

		urlRoot: '/tt/api/projects',

		idAttribute: "_id",

		defaults: {
			userId: 1,
			name: "My Project",
			description: "My Description"
		},

		validate: function(attributes) {
			// TODO
		}
	});

	return ProjectModel;
});

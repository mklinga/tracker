define([ 'underscore', 'backbone' ], function(_, Backbone){
	/* Project */
	var ProjectModel = Backbone.Model.extend({

		urlRoot: '/tt/api/projects',

		defaults: {
			userId: 0,
			projectId: 0,
			name: "My Project",
			description: "My Description"
		},
		validate: function(attributes) {
			// TODO
		}
	});

	return ProjectModel;
});

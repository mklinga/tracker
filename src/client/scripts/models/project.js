define([ 'underscore', 'backbone' ], function(_, Backbone){
	/* Project */
	var ProjectModel = Backbone.Model.extend({
		defaults: {
			userId: 0,
			projectId: 0,
			name: "My Project"
		},
		validate: function(attributes) {
			// TODO
		}
	});

	return ProjectModel;
});

define([ 'underscore', 'backbone' ], function(_, Backbone){
	/* Project */
	var ProjectModel = Backbone.Model.extend({
		defaults: {
			userId: 0,
			id: 0,
			name: "My Project"
		},
		validate: function(attributes) {
			// TODO
		}
	});

	return ProjectModel;
});

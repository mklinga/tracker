define([ 'underscore', 'backbone', 'models/history' ], function(_, Backbone, ProjectModel){
	var ProjectCollection = Backbone.Collection.extend({
		model: ProjectModel
	});

	return ProjectCollection;
});

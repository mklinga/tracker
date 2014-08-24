define([ 'underscore', 'backbone', 'models/history' ], function(_, Backbone, ProjectModel){
	var ProjectCollection = Backbone.Collection.extend({
		model: ProjectModel,
		url: '/tt/api/projects'
	});

	return ProjectCollection;
});

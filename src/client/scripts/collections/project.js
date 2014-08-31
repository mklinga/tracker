define([ 'underscore', 'backbone', 'models/project' ], function(_, Backbone, ProjectModel){
	var ProjectCollection = Backbone.Collection.extend({
		model: ProjectModel,
		url: '/tt/api/projects'
	});

	return ProjectCollection;
});

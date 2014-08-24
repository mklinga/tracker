define([ 'jquery', 'underscore', 'backbone', 'views/project', 'collections/project', 'models/project' ],
		
function($, _, Backbone, ProjectListView, ProjectCollection, ProjectModel) {

	var ProjectListController = function() {

		/*
		 * Get times for this project
		 */

		var that = this;
		
		$.get("/tt/api/projects", function( data ) {
			/* TODO: validate recieved data */
			var parsedData = JSON.parse(data);
			that.collection = new ProjectCollection();

			for (var index in parsedData) {
				var projectItem = new ProjectModel({
					projectId: parsedData[index].projectId,
					userId: parsedData[index].userId,
					name: parsedData[index].name
				});

				that.collection.add(projectItem);
			}

			var projectListView = new ProjectListView({collection: that.collection });
			$("main").html(projectListView.render().el);
		});

	};

	return ProjectListController;
});

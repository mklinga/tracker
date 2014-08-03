define(['jquery', 'underscore', 'backbone', 'collections/project', 'models/project', 'templates'],
function($, _, Backbone, ProjectCollection, ProjectModel, JST) {

	var ProjectItemView = Backbone.View.extend({
		tagName: 'li',
	
		template: JST["client/templates/projects.html"],

		render: function() {
			this.$el.html( this.template(this.model.toJSON()));
			return this;
		}
	});
	
	var ProjectListView = Backbone.View.extend({
		tagName: 'ul',
	
		render: function() {

			var that = this;

			$.get("https://localhost/tt/api/projects", function( data ) {
				/* TODO: validate recieved data */
				var parsedData = JSON.parse(data);
				that.collection = new ProjectCollection();

				for (var index in parsedData) {
					var projectItem = new ProjectModel({
						userId: parsedData[index].userId,
						id: parsedData[index].id,
						name: parsedData[index].name
					});

					that.collection.add(projectItem);
				}

				that.collection.each(function(project) {
					var projectView = new ProjectItemView({ model: project });
					that.$el.append(projectView.render().el);
				}, that);

			});

			return this;
		}
	});

	return ProjectListView;
});

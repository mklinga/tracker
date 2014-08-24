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
	
		template: JST["client/templates/projects.html"],

		render: function() {

			this.$el.html( this.template({items: this.collection.toJSON()}));

			var that = this;
			this.$('#addNewProjectLink').click(function(e) {
				//that.trigger("showSaveForm");
			});

			return this;
		}
	});

	return ProjectListView;
});

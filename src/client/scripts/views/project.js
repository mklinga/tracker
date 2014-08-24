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
	
	/*
	 * Form to add new items
	 */

	var NewProjectItemView = Backbone.View.extend({
		tagName: 'div',
		
		className: 'project-list-item-new',
	
		template: JST["client/templates/project_new.html"],

		events: {
			"click #saveNewProject": "saveNewProject"
		},

		render: function() {
			this.$el.html( this.template());
			return this;
		},

		saveNewProject: function() {
			this.$el.html("<span>Saved (not really)!</span>");
		}
	});
	
	/*
	 * Main section for page
	 */

	var ProjectListView = Backbone.View.extend({
		tagName: 'div',
	
		initialize: function() {
			this.on('showNewForm', this.showNewForm, this);
		},

		template: JST["client/templates/projects.html"],

		render: function() {

			this.$el.html( this.template({items: this.collection.toJSON()}));

			var that = this;
			this.$('#addNewProjectLink').click(function(e) {
				that.trigger("showNewForm");
			});

			return this;
		},

		showNewForm: function() {
			var newItem = new NewProjectItemView();
			this.$el.append(newItem.$el);
			newItem.render();
		}
	});

	return ProjectListView;
});

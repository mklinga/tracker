define(['jquery', 'underscore', 'backbone', 'collections/project', 'models/project', 'templates'],
function($, _, Backbone, ProjectCollection, ProjectModel, JST) {

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
			var newProject = new ProjectModel({userId: 1, name: $("#projectName").val(), description: $("#projectDesc").val()});
			newProject.save();
			this.collection.add(newProject);
		}
	});
	/*
	 * Form to edit items
	 */

	var UpdateProjectItemView = Backbone.View.extend({
		tagName: 'div',
		
		template: JST["client/templates/project_update.html"],

		events: {
			"click #updateProject": "updateProject"
		},

		render: function() {
			this.$el.html( this.template());
			return this;
		},

		updateProject: function() {
			this.model.save({name: $("#projectName").val(), description: $("#projectDesc").val()});
		}
	});
	
	/*
	 *  List of all the projects
	 */

	var ProjectListView = Backbone.View.extend({
		el: $("main"),
		tagName: 'div',
	
		initialize: function() {
			this.collection = new ProjectCollection();
			this.collection.fetch();
			this.collection.on("sync add remove reset", this.render, this);

			this.on('showNewForm', this.showNewForm, this);
		},

		template: JST["client/templates/projects.html"],

		render: function() {

			/* We render the main template first, then inject individual models to the list */
			this.$el.html( this.template({}))

			this.collection.each(function(project){
				var projectView = new SingleProjectView({ model: project });
				this.$('#projectlist').append(projectView.render().el);
			}, this);

			var that = this;

			this.$('#addNewProjectLink').click(function(e) {
				that.trigger("showNewForm");
			});

			return this;
		},

		showNewForm: function() {
			var newItem = new NewProjectItemView({ collection: this.collection});
			this.$el.append(newItem.$el);
			newItem.render();
		}
	});

	/*
	 * View of an individual project
	 */

	var SingleProjectView = Backbone.View.extend({
		tagname: 'div',

		events: {
			'click .removeProject': 'removeProject',
			'click .updateProject': 'updateProject',
		},

		initialize: function() {
			this.on('change', this.render, this);
		},

		template: JST['client/templates/project_single.html'],

		render: function() {
			this.$el.html( this.template({ item: this.model.toJSON()}));
			return this;
		},

		removeProject: function() {
			this.model.destroy();
		},

		updateProject: function() {
			var editItem = new UpdateProjectItemView({ model: this.model});
			this.$el.html(editItem.$el);
			editItem.render();
		}
	})

	return ProjectListView;
});

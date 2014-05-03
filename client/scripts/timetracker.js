$( document ).ready(function() {

	/* Create our application */
	window.App = {
		Models: {},
		Collections: {},
		Views: {},
		Router: {}
	};

	/*
	 *
	 * Models
	 *
	 */
	
	/* History item */
	App.Models.History = Backbone.Model.extend({
		defaults: {
			userId: 0,
			timerId: 9,
			begin: 1,
			end: 2
		},
	});

	/* User */
	App.Models.User = Backbone.Model.extend({
		defaults: {
			id: 0,
			name: "John"
		},
		validate: function(attributes) {
			if (!attributes.name)
				return "User must have a name!";

			if (attributes.id < 0)
				return "Id cannot be negative!";
		}
	});

	/*
	 *
	 * Collections
	 *
	 */
	
	App.Collections.HistoryCollection = Backbone.Collection.extend({
		model: App.Models.History
	});

	/*
	 *
	 * Views
	 *
	 */
	
	App.Views.HistoryItemView = Backbone.View.extend({
		tagName: 'li',
	
		template: JST["client/templates/times.html"],

		render: function() {
			this.$el.html( this.template(this.model.toJSON()));
			return this;
		}
	});
	
	App.Views.HistoryListView = Backbone.View.extend({
		tagName: 'ul',
	
		render: function() {
			this.collection.each(function(history) {
				var historyView = new App.Views.HistoryItemView({ model: history });
				this.$el.append(historyView.render().el);
			}, this);
			return this;
		}
	});
	

	/* All done! */
	console.log("Document ready.");
});

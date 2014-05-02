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
	
	/* 
	 *
	 * Router
	 *
	 */

	App.Router = Backbone.Router.extend({
		routes: {
			'': 'dashboard',
			'times': 'times',
			'settings': 'settings',
		},
		dashboard: function() {
			/* index */
		},
		times: function() {
			$("#timetable").empty().html("<h2>Times</h2>");

			$.get("https://localhost/tt/api/times", function( data ) {
				/* TODO: validate recieved data */
				var parsedData = JSON.parse(data);

				/* TODO: don't save to window. */
				window.historyCollection = new App.Collections.HistoryCollection();

				for (var index in parsedData) {
					for (var hist in parsedData[index].history) {
						var historyItem = new App.Models.History({
							begin: parsedData[index].history[hist].begin,
							end: parsedData[index].history[hist].end
						});

						window.historyCollection.add(historyItem);
					}
				}
				
				/* render times in the screen */
				var hlv = new App.Views.HistoryListView({collection: window.historyCollection});
				$('#timetable').append(hlv.render().el);

			});
		},

		settings: function() {
			// $("main").html("Set things");
		}
	});

	/* Initialize our router */
	new App.Router();

	/* Start logging history (needed by router) */
	Backbone.history.start();

	/* All done! */
	console.log("Document ready.");
});

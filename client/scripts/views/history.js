define(['jquery', 'underscore', 'backbone', 'collections/history', 'models/history', 'templates'],
function($, _, Backbone, HistoryCollection, HistoryModel, JST) {

	/*
	 * Single time-item on history list
	 */

	var HistoryItemView = Backbone.View.extend({
		tagName: 'li',
		
		className: 'history-list-item',
	
		template: JST["client/templates/time_item.html"],

		render: function() {
			this.$el.html( this.template(this.model.toJSON()));
			return this;
		}
	});

	/*
	 * Form to add new items
	 */

	var NewHistoryItemView = Backbone.View.extend({
		tagName: 'div',
		
		className: 'history-list-item-new',
	
		template: JST["client/templates/times_new.html"],

		events: {
			"click #saveNewTime": "saveNewTime"
		},

		render: function() {
			this.$el.html( this.template());
			return this;
		},

		saveNewTime: function() {
			this.$el.html("<span>Saved (not really)!</span>");
		}
	});
	
	/*
	 * Main section for page
	 */

	var HistoryListView = Backbone.View.extend({
		tagName: 'div',
		template: JST["client/templates/history.html"],

		initialize: function() {
			this.on('showSaveForm', this.showSaveForm, this);
		},

		render: function() {

			var that = this;

			this.$el.html( this.template({project_id: this.id}));

			this.collection.each(function(history) {
				var historyView = new HistoryItemView({ model: history, id: 'timer-id-' + history.get("timerId") });
				that.$el.children("ul").append(historyView.$el);
				historyView.render();
			}, that);

			this.$('#addNewTimeLink').click(function(e) {
				that.trigger("showSaveForm");
			});

			return this;
		},

		showSaveForm: function() {
			var newItem = new NewHistoryItemView();
			this.$el.append(newItem.$el);
			newItem.render();
		}
	});

	return HistoryListView;
});

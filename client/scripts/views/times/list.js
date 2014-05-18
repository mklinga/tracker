define(['jquery', 'underscore', 'backbone', 'collections/history', 'models/history', 'templates'],
function($, _, Backbone, HistoryCollection, HistoryModel, JST) {

	var HistoryItemView = Backbone.View.extend({
		tagName: 'li',
	
		template: JST["client/templates/times.html"],

		render: function() {
			this.$el.html( this.template(this.model.toJSON()));
			return this;
		}
	});
	
	var HistoryListView = Backbone.View.extend({
		tagName: 'ul',
	
		render: function() {

			var that = this;

			$.get("https://localhost/tt/api/times", function( data ) {
				/* TODO: validate recieved data */
				var parsedData = JSON.parse(data);
				that.collection = new HistoryCollection();

				for (var index in parsedData) {
					for (var hist in parsedData[index].history) {
						var historyItem = new HistoryModel({
							begin: parsedData[index].history[hist].begin,
							end: parsedData[index].history[hist].end
						});

						that.collection.add(historyItem);
					}
				}

				that.collection.each(function(history) {
					var historyView = new HistoryItemView({ model: history });
					that.$el.append(historyView.render().el);
				}, that);

			});

			return this;
		}
	});

	return HistoryListView;
});

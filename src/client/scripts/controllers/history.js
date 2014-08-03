define([ 'jquery', 'underscore', 'backbone', 'views/history', 'collections/history', 'models/history' ],
		
function($, _, Backbone, HistoryListView, HistoryCollection, HistoryModel) {

	var HistoryListController = function(projectId) {

		/*
		 * Get times for this project
		 */

		var that = this;

		$.get("https://localhost/tt/api/times/" + projectId, function( data ) {
			/* TODO: validate recieved data */
			var parsedData = JSON.parse(data);
			that.collection = new HistoryCollection();

			for (var index in parsedData) {
				var historyItem = new HistoryModel({
					begin: parsedData[index].begin,
					end: parsedData[index].end,
					timerId: parsedData[index].timerId,
					userId: parsedData[index].userId
				});

				that.collection.add(historyItem);
			}

			var historyListView = new HistoryListView({id: projectId, collection: that.collection });
			$("main").html(historyListView.render().el);
		});

	};

	return HistoryListController;
});

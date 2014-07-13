define([ 'jquery', 'underscore', 'backbone', 'views/history' ],
		
function($, _, Backbone, HistoryListView){

	var HistoryListController = function(projectId) {
		var historyListView = new HistoryListView({id: projectId});
		$("main").html(historyListView.render().el);
	};

	return HistoryListController;
});

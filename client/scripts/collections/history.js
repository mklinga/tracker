define([ 'underscore', 'backbone', 'models/history' ], function(_, Backbone, HistoryModel){
	var HistoryCollection = Backbone.Collection.extend({
		model: HistoryModel
	});

	return HistoryCollection;
});

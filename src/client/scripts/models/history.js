define([ 'underscore', 'backbone' ], function(_, Backbone){
	/* History Model */
	var HistoryModel = Backbone.Model.extend({
		defaults: {
			userId: 0,
			timerId: 9,
			begin: 1,
			end: 2
		},
	});

	return HistoryModel;
});


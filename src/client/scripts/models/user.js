define([ 'underscore', 'backbone' ], function(_, Backbone){
	/* User */
	var UserModel = Backbone.Model.extend({
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

	return UserModel;
});

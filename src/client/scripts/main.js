require.config({
  paths: {
    jquery: 'libraries/jquery/jquery-min',
    underscore: 'libraries/underscore/underscore-min',
    backbone: 'libraries/backbone/backbone-min'
  }

});

/* load application */
require([ 'app', ], function(App){
  App.initialize();
});

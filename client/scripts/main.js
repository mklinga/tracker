// Filename: main.js

// Require.js allows us to configure shortcut alias
require.config({
  paths: {
    jquery: 'libraries/jquery/jquery-min',
    underscore: 'libraries/underscore/underscore-min',
    backbone: 'libraries/backbone/backbone-min'
  }

});

require([

  // Load our app module and pass it to our definition function
  'app',
], function(App){
  // The "app" dependency is passed in as "App"
  App.initialize();
});

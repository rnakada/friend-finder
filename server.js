// Dependencies
var express = require('express');

// Telling node we are creating an 'express' server
var app = express();

// Sets an initial port
var PORT = process.env.PORT || 8080;

// Sets up the 'express' app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Routes || gives our server a 'map' of how to respond when users visit or request data from various URL's
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// Listener || 'starts' our server
app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
});
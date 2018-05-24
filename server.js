var express = require('express');
var expressHandlebars = require('express-handlebars');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cheerio = require('cheerio');
var request = require('request');
var path = require('path');
var logger = require('morgan');

var app = express();

var db = require('./models');

var PORT = process.env.PORT || 3000;

// Use morgan logger for logging requests
app.use(logger('dev'));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
// Use express.static to serve the public folder as a static directory
app.use(express.static(path.join(__dirname, 'public')));

// Connect to the Mongo DB
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/mongoHeadlines';
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

require('./routes/html-routes.js')(app);
require('./routes/api-routes.js')(app);

// Listen to port
app.listen(PORT, function(e) {
    if (e) throw e
    console.log(`Listening on PORT ${PORT}`)
});
var relativePath = "../node_modules/";

var express = require(relativePath + "express");
var namespace = require(relativePath + 'express-namespace');
var sass = require(relativePath + "node-sass");
var morgan = require(relativePath + "morgan");

var mongoose = require(relativePath + "mongoose");
mongoose.connect('mongodb://localhost:27017/atxvotes');

var app = express();

app.set("port", 9000);
app.use(morgan());

// marker for `grunt-express` to inject static folder/contents
app.use(function staticsPlaceholder(req, res, next) {
    return next();
});
//app.use(express["static"]("../app"));

// Require the routes file
require('./routes/routes')(app);

//app.listen(app.get('port'));

module.exports = app;
var relativePath = "../../node_modules/";

var mongoose = require(relativePath + 'mongoose');
var Schema   = mongoose.Schema;

var electionSchema = new Schema({
    name: String,
    date: String,
    description: String
});

module.exports = mongoose.model('election', electionSchema);
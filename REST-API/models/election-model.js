var relativePath = "../../node_modules/";

var mongoose = require(relativePath + 'mongoose');

var CandidateSchema = require("./candidate-model");

var electionSchema = new mongoose.Schema({
    candidates: [CandidateSchema],
    name: String,
    date: String,
    description: String
}, {
    strict: true
});

module.exports = mongoose.model('Election', electionSchema);
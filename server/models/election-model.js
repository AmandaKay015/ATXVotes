var relativePath = "../../node_modules/";

var mongoose = require(relativePath + 'mongoose');
var Schema   = mongoose.Schema;

var electionSchema = new Schema({
    name: String,
    date: String,
    description: String,
    candidates: [{
        type: Schema.Types.ObjectId,
        ref: 'candidate'
    }]
});

module.exports = mongoose.model('election', electionSchema);
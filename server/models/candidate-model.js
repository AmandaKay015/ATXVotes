var relativePath = "../../node_modules/";

var mongoose = require(relativePath + 'mongoose');
var Schema   = mongoose.Schema;

var candidiateSchema = new Schema({
    election_id: {
        type: String,
        required: true
    },
    district: Number,
    position: String,
    name: String,
    focus: String,
    /*issues: [String],*/
    image: String,
    experience: String,
    occupation: String,
    facebook: String,
    url: String,
    contact: String,
    in_office: Number,
    finance: String,
    other: String
}, {
    strict: true
});

module.exports = mongoose.model('candidate', candidiateSchema);
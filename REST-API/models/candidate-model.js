var relativePath = "../../node_modules/";

var mongoose = require(relativePath + 'mongoose');

var candidiateSchema = new mongoose.Schema({
    election_id: {
        type: Number,
        required: true
    },
    district: Number,
    position: String,
    name: String,
    focus: String,
    issues: [String],
    image: String,
    experience: String,
    occupation: String,
    facebook: String,
    url: String,
    contact: String,
    in_office: Boolean,
    finance: String,
    other: String
}, {
    strict: true
});

module.exports = mongoose.model('Candidate', candidiateSchema);
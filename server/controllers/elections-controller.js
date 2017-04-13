var Election = require("../models/election-model");
var Candidate = require("../models/candidate-model");

// Retrieves all elections and grabs candidates for each election
exports.list = function(req, res, next) {
    Election
    .find()
    .populate('candidates')
    .exec(function(err, elections) {
        if (err) return next(err);

        res.json(elections);
    });
};

// Retrieves one election with candidates that belong to it
exports.index = function(req, res, next) {
    Election
    .findById(req.params.id)
    .populate('candidates')
    .exec(function(err, election) {
        if (err) return next(err);
        
        res.json(election);
    });
};

// Retrieves all elections, where candidates are filtered by district
exports.findByDistrict = function(req, res, next) {
    Election
    .find()
    .populate({
        path: 'candidates',
        match: { district: req.params.id }
    })
    .exec(function(err, elections) {
        if (err) return next(err);

        res.json(elections);
    });
};
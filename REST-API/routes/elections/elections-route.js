var Election = require("../../models/election-model");
var Candidate = require("../../models/candidate-model");

exports.indicies = function(req, res, next) {
    Election.find({}, function(err, elections) {
        if (err) return next(err);
        res.send({
            election: elections
        });
    });
};

exports.index = function(req, res, next) {
    Election.findById(req.params.id, function(err, election) {
        if (err) return next(err);
        res.send({
            election: election
        });
    });
};
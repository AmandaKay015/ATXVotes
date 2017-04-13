var Candidate = require("../models/candidate-model");

exports.list = function(req, res, next) {
    Candidate.find({}, function(err, candidates) {
        if (err) return next(err);
        res.send({
            candidate: candidates
        });
    });
};

exports.index = function(req, res, next) {
    Candidate.findById(req.params.id, function(err, candidate) {
        if (err) return next(err);
        res.send({
            candidate: candidate
        });
    });
};
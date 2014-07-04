var requireRelativePath = "../../node_modules/";
var namespace = require(requireRelativePath + 'express-namespace');

/* Route Dependencies */
var election = require('../controllers/elections-controller');
var candidate = require('../controllers/candidates-controller');

/*API Calls For Ember Namespace Here*/
module.exports = function(app) {
    app.namespace('/api/', function() {
        
        // elections
        app.get('election/:id', election.index);
        app.get('elections', election.list);
        
        // candidates
        app.get('candidate/:id', candidate.index);
        app.get('candidates', candidate.list);

        // districts
        app.get('district/:id', election.findByDistrict);
    });



    /*app.get('/@@ember', function(req, res) {
        res.sendfile('ember.js', {
            root: '../app/bower_components/ember/'
        });
    });

    app.get('/@@ember_data', function(req, res) {
        res.sendfile('ember-data.js', {
            root: '../app/bower_components/ember-data/'
        });
    });

    app.get('/scripts/combined-scripts.js', function(req, res) {
        res.sendfile('combined-scripts.js', {
            root: '../.tmp/scripts/'
        });
    });

    app.get('/scripts/compiled-templates.js', function(req, res) {
        res.sendfile('compiled-templates.js', {
            root: '../.tmp/scripts/'
        });
    });*/
};
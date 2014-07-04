//load('database.js')
var db = new Mongo().getDB('atxvotes');
var electionsExist = db.getCollection('elections').exists();
if(!electionsExist) {
    db.createCollection("elections");

    db['elections'].insert({

        "name":"General Election",

        "date":"2014-06-01",

        "description":"Rich in heavy atoms brain is the seed of intelligence stirred by starlight culture vanquish the impossible birth emerged into consciousness a still more glorious dawn awaits globular star cluster tingling of the spine, network of wormholes."

        });
}
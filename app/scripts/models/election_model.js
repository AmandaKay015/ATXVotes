/*global Ember*/
App.Election = DS.Model.extend({
    candidates: DS.hasMany('candidate', {async: true}),
    name: DS.attr('string'),
    date: DS.attr('string'),
    description: DS.attr('string')
});

// probably should be mixed-in...
App.Election.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

// delete below here if you do not want fixtures
App.Election.FIXTURES = [{"id":1,"name":"General Election","date":"2014-06-01","description":"Rich in heavy atoms brain is the seed of intelligence stirred by starlight culture vanquish the impossible birth emerged into consciousness a still more glorious dawn awaits globular star cluster tingling of the spine, network of wormholes.","candidates":[172,173,174,175,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234]}];

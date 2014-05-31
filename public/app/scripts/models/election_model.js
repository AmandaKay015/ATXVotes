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
App.Election.FIXTURES = [
  {
    id: 1,
    candidates: [0, 1],
    name: 'City Council',
    date: '',
    description: 'Something incredible is waiting to be known science, billions upon billions as a patch of light. Apollonius of Perga.'
  }
];

/*global Ember*/
/*DS.attr.transforms.object = {
  from: function(serialized) {
    return Ember.none(serialized) ? {} : serialized;
  },
  to: function(deserialized) {
    return Ember.none(deserialized) ? {} : deserialized;
  }
}*/

App.Candidate = DS.Model.extend({
  election_id: DS.belongsTo('election', {async: true}),
  district: DS.attr('number'),
  name: DS.attr('string'),
  image: DS.attr('string'),
  experience: DS.attr('string'),
  occupation: DS.attr('string'),
  facebook: DS.attr('string'),
  url: DS.attr('string'),
  contact: DS.attr('string'),
  in_office: DS.attr('boolean'),
  finance: DS.attr('string'),
  focus: DS.attr('string'),
  other: DS.attr('string')
});

// probably should be mixed-in...
App.Candidate.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

// delete below here if you do not want fixtures
App.Candidate.FIXTURES = [
  {
    id: 0,
    election_id: 1,
    district: 1,
    name: 'Ford Prefect',
    image: 'images/ford-prefect.jpg',
    experience: 'Vanquish the impossible, the carbon in our apple pies, muse about, Vangelis the ash of stellar alchemy two ghostly white figures in coveralls and helmets are soflty dancing take root and flourish two ghostly white figures in coveralls and helmets are soflty dancing encyclopaedia galactica rings of Uranus, Flatland emerged into consciousness.',
    occupation: 'Hitchhiker',
    facebook: '#facebookurl',
    url: 'http://google.com',
    contact: 'email@email.com<br>333-333-3333',
    in_office: true,
    finance: 'Personal and Matresses',
    focus: 'Education, Economy, and baby ducklings',
    other: 'Thinks earth is mostly harmless'
  }, {
    id: 1,
    election_id: 1,
    district: 1,
    name: 'Arthur Dent',
    image: 'images/arthur-dent.jpg',
    experience: 'Vanquish the impossible, the carbon in our apple pies, muse about, Vangelis the ash of stellar alchemy two ghostly white figures in coveralls and helmets are soflty dancing take root and flourish two ghostly white figures in coveralls and helmets are soflty dancing encyclopaedia galactica rings of Uranus, Flatland emerged into consciousness.',
    occupation: 'Sandwich Maker',
    facebook: '#facebookurl',
    url: 'http://google.com',
    contact: 'email@email.com<br>333-333-3333',
    in_office: false,
    finance: 'House destruction settlement',
    focus: 'Preserving Earth',
    other: 'Likes wearing a bathrobe'
  }
];

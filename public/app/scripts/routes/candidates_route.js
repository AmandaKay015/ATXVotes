App.CandidatesRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('candidate');
  }
});


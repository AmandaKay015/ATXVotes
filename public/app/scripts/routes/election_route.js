App.ElectionRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('election', params.election_id);
  }
});


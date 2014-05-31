App.ElectionsRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('election');
  },
  setupController: function(controller, model) {
    //controller.set('model', model);

    var promises = model.map(function(election) {
      return Ember.RSVP.hash({
        election: election,
        candidates: election.get('candidates').then(function(candidates) {
          return candidates;
        })
      });
    });

    Ember.RSVP.all(promises).then(function(candidates) {
      controller.set('candidates', candidates);
    });

  }
});


App.CandidateRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('candidate', params.candidate_id);
  }
});


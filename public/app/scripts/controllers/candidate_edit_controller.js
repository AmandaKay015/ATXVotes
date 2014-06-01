App.CandidateEditController = Ember.ObjectController.extend({
  needs: 'candidate',
  actions: {
    save: function(){
      self = this
      this.get('buffer').forEach(function(attr){
        self.get('controllers.candidate.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('candidate',this.get('model'));
    }
  }
});


App.ElectionEditController = Ember.ObjectController.extend({
  needs: 'election',
  actions: {
    save: function(){
      self = this
      this.get('buffer').forEach(function(attr){
        self.get('controllers.election.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('election',this.get('model'));
    }
  }
});


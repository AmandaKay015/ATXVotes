App.IndexController = Ember.ObjectController.extend({
  actions: {
    findDistrict: function() {
      this.transitionToRoute('elections');
    }
  }
});


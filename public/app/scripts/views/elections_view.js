App.ElectionsView = Ember.View.extend({
  candidateContainer: null,
  filterButtons: null,
  actions: {
    setFilterClass: function (className) {
      // store candidate container and filter button variable when action is first called
      if(!this.candidateContainer || !this.filterButtons) {
        console.log("candidateContainer not defined");
        this.candidateContainer = this.$().find('.candidate-list');
        this.filterButtons = this.$().find('.filter-btn');
      }

      // set filter button classes
      this.filterButtons.removeClass('active').filter('.' + className).addClass('active');

      this.candidateContainer.removeClass('mayor all council').addClass(className);
    }
  }
});

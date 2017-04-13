App.IndexView = Ember.View.extend({
  didInsertElement: function() {
    show_main_content(this.$('.fade-in'));
  }
});

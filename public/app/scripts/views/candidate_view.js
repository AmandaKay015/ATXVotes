App.CandidateView = Ember.View.extend({
  didInsertElement:function() {
    var $accordion = this.$('.accordion-wrapper');

    $accordion.find('.accordion-trigger').on('click', function(e) {
      if($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).siblings('.accordion-content').slideUp();
      } else {
        $accordion.find('.accordion-trigger').removeClass('active');
        $accordion.find('.accordion-content').slideUp();
        $(this).addClass('active');
        $(this).siblings('.accordion-content').slideDown();
      }
      e.preventDefault();
    });
  }
});

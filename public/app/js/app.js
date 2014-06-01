//(function($) {
  'use strict';
  console.log("hello, world");

  function show_modal(el) {
    var $modal = $(el).parent('.page-modal'),
        $modalbg = $('<div class="modal-bg"></div>');

    // pre-transform styles
    TweenLite.set($modal, {
      'display': 'block',
      scale: 0,
      x: -$modal.outerWidth()/2,
      y: -$modal.outerHeight()/2
    });
    TweenLite.set($modalbg, {opacity: 0});

    // add modal bg to dom
    $modal.after($modalbg);

    // transform
    TweenMax.to($modalbg, 0.3, {
      opacity: 1
    });
    TweenMax.to($modal, 0.4, {
      scale: 1,
      delay: 0.2,
      ease: Back.easeOut
    });
  }

  function hide_modal(el) {
    var $modal = $(el).parent('.page-modal'),
        $modalbg = $('.modal-bg');

    // transition out
    TweenMax.to($modal, 0.3, {
      scale: 0,
      ease: Back.easeIn
    });
    TweenMax.to($modalbg, 0.2, {
      opacity: 0,
      delay: 0.2
    });

    // remove elements
    $modalbg.remove();
    $(el).remove();

  }

  function show_main_content(el) {
    var $this = $(el),
        $container = $(el).parents('.container'),
        height = $(el).outerHeight(),
        container_height = $container.height(),
        top_offset = $this.offset().top,
        position = (container_height- top_offset - height)/2 - 20;

    TweenLite.set($this, {
      opacity: 0,
      top: position,
      y: 50
    });

    TweenMax.to($this, 1, {
      y: 0,
      opacity: 1
    });
    console.log(position);
  }

//})(jQuery);

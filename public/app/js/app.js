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

  function show_district_map(el, colors) {
    var $map_container = $(el),
        district_colors = colors;

    var map = new google.maps.Map($map_container[0], {
      zoom: 10,
      center: new google.maps.LatLng(30.331227, -97.725019),
      styles: [{"stylers": [{"saturation": -75},{"lightness": 75}]}],
      minZoom: 9
    });

    var file = 'js/districts.json';

    d3.json(file, function(error, data, controller) {
      console.log(data.features);

      var overlay = new google.maps.OverlayView();

      overlay.onAdd = function () {

        var layer = d3.select(this.getPanes().overlayMouseTarget).append("div").attr("class", "district-overlay");

        var svg = layer.append("svg")
          .attr("width", $map_container.width())
          .attr("height", $map_container.height())
        var adminDivisions = svg.append("g").attr("class", "AdminDivisions");

        overlay.draw = function () {
          var markerOverlay = this;
          var overlayProjection = markerOverlay.getProjection();

          // Turn the overlay projection into a d3 projection
          var googleMapProjection = function (coordinates) {
            var googleCoordinates = new google.maps.LatLng(coordinates[1], coordinates[0]);
            var pixelCoordinates = overlayProjection.fromLatLngToDivPixel(googleCoordinates);
            return [pixelCoordinates.x, pixelCoordinates.y];
          }

          var path = d3.geo.path().projection(googleMapProjection);
          adminDivisions.selectAll("path")
            .data(data.features)
            .attr("d", path) // update existing paths
            .attr("class", function(d) { return "district-" + d.properties.DISTRICT_1; })
            .enter().append("svg:path")
            .attr("d", path)
            .attr("stroke", "#ccc")
            .attr("opacity", "0.75")
            .attr("fill", function(d) { return district_colors[d.properties.DISTRICT_1]; })
            .on("click", click_fn);
        };

        function click_fn(data) {
          console.log(data.properties.DISTRICT_N);
          var $thing = $map_container.siblings('h2').find('.district-name');

          $thing.html(": District " + data.properties.DISTRICT_N);
        }
      };

      overlay.setMap(map);
    });

  }

//})(jQuery);

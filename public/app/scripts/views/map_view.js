App.MapView = Ember.View.extend({
  didInsertElement: function() {
    var map_container = this.$('.map-container'),
        district_colors = {
          1: "red",
          2: "green",
          3: "blue",
          4: "teal",
          5: "orange",
          6: "maroon",
          7: "yellow",
          8: "black",
          9: "white",
          10: "turquoise"
        };
    show_district_map(map_container, district_colors);
  }
});

App.MapView = Ember.View.extend({
  didInsertElement: function() {
    var map_container = this.$('.map-container'),
        district_colors = {
          1: "#A3D5D8",
          2: "#F99393",
          3: "#3DC993",
          4: "#EFE052",
          5: "#DB75EA",
          6: "#36B5C9",
          7: "#965AE5",
          8: "#FCFAB1",
          9: "#A5E856",
          10: "#ED7C43"
        };
    show_district_map(map_container, district_colors);
  }
});

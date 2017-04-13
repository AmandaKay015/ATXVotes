App.ApplicationAdapter = DS.FixtureAdapter;

/*App.ApplicationAdapter = DS.RESTAdapter.extend({
  url: 'http://localhost:3000',
  namespace: 'api',

  serializer: DS.RESTSerializer.extend({
      primaryKey: function(type) {
          return '_id';
      }
      serializeId: function(id) {
            return id.toString();
        }
  })
});*/
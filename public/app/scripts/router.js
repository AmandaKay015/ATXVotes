App.Router.map(function () {

  this.route('map');
  this.route('about');
  
  this.resource('elections', function(){
    this.resource('election', { path: '/:election_id' }, function(){
      this.route('edit');
    });
    this.route('create');

    this.resource('candidates', function(){
      this.resource('candidate', { path: '/:candidate_id' }, function(){
        this.route('edit');
      });
      this.route('create');
    });
  });
  
});

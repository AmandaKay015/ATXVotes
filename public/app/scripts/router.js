App.Router.map(function () {
  
  this.resource('candidates', function(){
    this.resource('candidate', { path: '/:candidate_id' }, function(){
      this.route('edit');
    });
    this.route('create');
  });
  
  this.resource('elections', function(){
    this.resource('election', { path: '/:election_id' }, function(){
      this.route('edit');
    });
    this.route('create');
  });
  
});

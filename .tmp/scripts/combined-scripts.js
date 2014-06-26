(function() {

var App = window.App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

DS.ArrayTransform = DS.Transform.extend({
  deserialize: function(serialized) {
    return (Ember.typeOf(serialized) == "array")
        ? serialized 
        : [];
  },

  serialize: function(deserialized) {
    var type = Ember.typeOf(deserialized);
    if (type == 'array') {
        return deserialized
    } else if (type == 'string') {
        return deserialized.split(',').map(function(item) {
            return jQuery.trim(item);
        });
    } else {
        return [];
    }
  }
});

App.register("transform:array", DS.ArrayTransform);

/* Order and include as you please. */

})();

(function() {

App.CandidateEditController = Ember.ObjectController.extend({
  needs: 'candidate',
  actions: {
    save: function(){
      var self = this
      this.get('buffer').forEach(function(attr){
        self.get('controllers.candidate.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('candidate',this.get('model'));
    }
  }
});



})();

(function() {

App.CandidatesController = Ember.ArrayController.extend({
  // Implement your controller here.
});



})();

(function() {

App.ElectionEditController = Ember.ObjectController.extend({
  needs: 'election',
  actions: {
    save: function(){
      var self = this
      this.get('buffer').forEach(function(attr){
        self.get('controllers.election.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('election',this.get('model'));
    }
  }
});



})();

(function() {

App.ElectionsController = Ember.ArrayController.extend({
  candidates: [],
});



})();

(function() {

App.IndexController = Ember.ObjectController.extend({
  actions: {
    findDistrict: function() {
      this.transitionToRoute('elections');
    }
  }
});



})();

(function() {



})();

(function() {

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

})();

(function() {



})();

(function() {

/*global Ember*/
/*DS.attr.transforms.object = {
  from: function(serialized) {
    return Ember.none(serialized) ? {} : serialized;
  },
  to: function(deserialized) {
    return Ember.none(deserialized) ? {} : deserialized;
  }
}*/

App.Candidate = DS.Model.extend({
  election_id: DS.belongsTo('election', {async: true}),
  district: DS.attr('number'),
  position: DS.attr('string'),
  name: DS.attr('string'),
  focus: DS.attr('string'),
  issues: DS.attr('array'),
  image: DS.attr('string'),
  experience: DS.attr('string'),
  occupation: DS.attr('string'),
  facebook: DS.attr('string'),
  url: DS.attr('string'),
  contact: DS.attr('string'),
  in_office: DS.attr('boolean'),
  district: DS.attr('number'),
  finance: DS.attr('string'),
  other: DS.attr('string')
});

// probably should be mixed-in...
App.Candidate.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

// delete below here if you do not want fixtures
App.Candidate.FIXTURES = [{"id":172,"election_id":1,"district":0,"position":"mayor","name":"Steve Adler","focus":"new 10-1 system, traffic, affordability, public education, poverty, water, environment","image":"\/images\/steve_adler.jpg","experience":"chief of staff\/general counsel for state Sen. Eliot Shapleigh; attorney (has argued civil rights cases, focuses on eminent domain defense); Anti-Defamation League Austin Region board chair; Texas Tribune board chair","occupation":"attorney","facebook":"http:\/\/facebook.com\/adlerforaustin","url":"http:\/\/www.adlerforaustin.com\/","contact":"@AdlerForAustin","in_office":0,"finance":"","other":""},{"id":173,"election_id":1,"district":0,"position":"mayor","name":"Sheryl Cole","focus":"Affordability, transportation, water, diversity, equity","image":"\/images\/sheryl_cole.jpg","experience":"Three-term City Council member; attorney and CPA; public schools advocate (former PTA president)","occupation":"Mayor Pro Tem","facebook":"http:\/\/www.facebook.com\/SherylforAustin","url":"http:\/\/www.sherylforaustin.com\/ ","contact":"@SherylCole1","in_office":1,"finance":"","other":""},{"id":174,"election_id":1,"district":0,"position":"mayor","name":"Mike Martinez","focus":"affordability, traffic and transportation, equity","image":"\/images\/mike_martinez.jpg","experience":"longtime civic activist; former firefighter and president, Austin Firefighters Association; Capital Metro board member and current chair","occupation":"City Council member (since 2006)","facebook":"http:\/\/facebook.com\/MikeMartinezforAustin ","url":"http:\/\/www.mike4mayor.com\/ ","contact":"@CouncilManMike","in_office":0,"finance":"","other":""},{"id":175,"election_id":1,"district":0,"position":"mayor","name":"Todd Phelps","focus":"transportation, environmental protection, taxation, open space","image":"\/images\/todd_phelps.jpg","experience":"energy negotiations, lending projects, farming, ranching, property management; arts and film production","occupation":"musician; businessman","facebook":"http:\/\/facebook.com\/toddphelpsmusic ","url":"http:\/\/www.phelpsforaustin.com\/ ","contact":"@PhelpsForAustin","in_office":0,"finance":"","other":""},{"id":215,"election_id":1,"district":7,"position":"council member","name":"Jimmy Paver","focus":"transportation, affordability, fiscal values","image":"\/images\/jimmy_paver.jpg","experience":"former congressional (Rep. Lloyd Doggett) and state House (Rep. Mark Strama) aide","occupation":"","facebook":"http:\/\/facebook.com\/jimmypaverforaustin","url":"http:\/\/www.jimmypaverforaustin.com\/","contact":"","in_office":0,"finance":"","other":"$40,000 loan taken out for political expend."},{"id":216,"election_id":1,"district":7,"position":"council member","name":"Melissa Zone","focus":"neighborhood preservation, affordability, transportation, health & safety, environmental protection","image":"\/images\/melissa_zone.jpg","experience":"transportation and water resource planner; co-author, Colorado River Corridor Plan; legislative analysis; public engagement and outreach","occupation":"senior urban planner, Travis County","facebook":"","url":"http:\/\/www.zoneforaustin.com\/","contact":"","in_office":0,"finance":"","other":""},{"id":217,"election_id":1,"district":8,"position":"council member","name":"Becky Bray","focus":"transportation, fiscal responsibility, affordability, water","image":"\/images\/becky_bray.jpg","experience":"board member, Real Estate Council of Austin; Capital Area Transportation Coalition; Greater Austin Chamber of Commerce","occupation":"project manager, Brown & Gay Engineers","facebook":"","url":"","contact":"","in_office":0,"finance":"","other":""},{"id":218,"election_id":1,"district":8,"position":"council member","name":"Eliza May","focus":"pending","image":"\/images\/eliza_may.jpg","experience":"longtime civic activist","occupation":"public policy consultant","facebook":"","url":"","contact":"","in_office":0,"finance":"","other":""},{"id":219,"election_id":1,"district":8,"position":"council member","name":"Darrell Pierce","focus":"efficiency, basic services, affordability, economic diversity","image":"\/images\/darrell_pierce.png","experience":"former state agency administrator (General Services Commission); Council candidate (2006); city commissioner (Planning Commission, Transit Working Group); civic volunteer","occupation":"president and CEO, SNAP Management consulting firm","facebook":"http:\/\/facebook.com\/DarrellPierceforAustin","url":"http:\/\/www.darrellpierce.com\/","contact":"","in_office":0,"finance":"","other":""},{"id":220,"election_id":1,"district":8,"position":"council member","name":"Ed Scruggs","focus":"affordability, open space\/parks, protecting Southwest Austin","image":"\/images\/ed_scruggs.jpg","experience":"neighborhood advocate; civic activist; former Circle C HOA director","occupation":"clinical research associate","facebook":"http:\/\/facebook.com\/Edscruggs4Austin8","url":"http:\/\/www.edscruggsfordistrict8.org\/","contact":"https:\/\/twitter.com\/Ed4Austin8","in_office":0,"finance":"","other":""},{"id":221,"election_id":1,"district":9,"position":"council member","name":"Erin McGann","focus":"transportation infrastructure, livability, simplified regulation, business\/education volunteerism","image":"\/images\/erin_mcgann.jpg","experience":"Citizens Review Panel (Office of Police Monitor); professional work in human services and public safety; basic needs coordination","occupation":"program supervisor (community re-entry), Texas Dept. of Criminal Justice","facebook":"http:\/\/facebook.com\/pages\/Erin-McGann-Austin-District-9\/651060658264855","url":"","contact":"erin4district9@gmail.com, @Erindistrict9","in_office":0,"finance":"","other":""},{"id":222,"election_id":1,"district":9,"position":"council member","name":"Chris Riley","focus":"economy & environment; transportation; preserving Austin's character (affordability, art, human services)","image":"\/images\/chris_riley.jpg","experience":"Council membership; city commissioner (Planning Commission, Downtown Commission, etc.); co-founder and former president, Downtown Austin NA","occupation":"City Council member (since 2009); attorney","facebook":"http:\/\/facebook.com\/ChrisForAustin","url":"http:\/\/www.chrisforaustin.com\/","contact":"chris@chrisforaustin.com","in_office":1,"finance":"","other":""},{"id":223,"election_id":1,"district":9,"position":"council member","name":"Kathie Tovo","focus":"affordability, neighborhood schools, transportation","image":"\/images\/kathie_tovo.jpg","experience":"Council membership; former president, Bouldin Creek NA; former vice president, Austin Neighborhoods Council; city commissioner (Planning Commission, Families and Children Task Force, etc.); Austin ISD Committee on Neighborhoods and Schools","occupation":"City Council member (since 2011)","facebook":"http:\/\/https\/\/www.facebook.com\/kathieforaustin?notif_t=fbpage_fan_invite","url":"http:\/\/www.kathieforaustin.com\/","contact":"https:\/\/twitter.com\/kathietovo","in_office":1,"finance":"$1,912","other":""},{"id":224,"election_id":1,"district":10,"position":"council member","name":"Margie Burciaga","focus":"transportation, property crime control, taxation, affordability","image":"\/images\/margie_burciaga.jpg","experience":"schools advocate; neighborhood organization member; Leadership Austin member","occupation":"business owner, Image Consulting Austin","facebook":"","url":"www.margieburciaga.com","contact":"","in_office":0,"finance":"$557","other":""},{"id":225,"election_id":1,"district":10,"position":"council member","name":"Tina Cannon","focus":"property tax appraisals, water and conservation, emergency preparedness (wildfires), affordability, transportation","image":"\/images\/tina_cannon.jpg","experience":"Council candidate (2012); entrepreneur-in-residence (Texas State Univ.); financial auditor and business consultant","occupation":"partner, Napkin Venture (entrepreneur advisory firm); director of client relations, Tuggey Calvoz law firm","facebook":"http:\/\/facebook.com\/ElectTinaCannon","url":"www.tinacannon.org","contact":"http:\/\/www.tinacannon.org\/contact_us","in_office":0,"finance":"","other":""},{"id":226,"election_id":1,"district":10,"position":"council member","name":"Mandy Dealey","focus":"water, transportation, affordability, neighborhood preservation","image":"\/images\/mandy_dealey.jpg","experience":"city commissioner (Planning Commission, Waterfront Overlay, etc.); former board chair, Mental Health Association, Planned Parenthood, Texas Lyceum, and Preservation Austin; current chair of KMFA-FM","occupation":"civic activist","facebook":"http:\/\/facebook.com\/MandyDealey10","url":"www.mandydealey.com","contact":"","in_office":0,"finance":"","other":""},{"id":227,"election_id":1,"district":10,"position":"council member","name":"Sheri Gallo","focus":"transportation and mobility, affordability and taxation, water (drought and wildfires), core services (public safety and infrastructure)","image":"\/images\/sheri_gallo.png","experience":"Commissioners Court candidate (2002); former chair, Housing Authority of Austin; former board member, Real Estate Council of Austin","occupation":"Realtor, business owner (Private Properties agency)","facebook":"https:\/\/www.facebook.com\/sherigalloaustincitycouncil","url":"http:\/\/www.sherigallo.com\/","contact":"http:\/\/www.sherigallo.com\/contact_us","in_office":0,"finance":"","other":""},{"id":228,"election_id":1,"district":10,"position":"council member","name":"Matt Lamon","focus":"district representation, transportation infrastructure, efficiency, cost of living","image":"\/images\/matt_lamon.jpg","experience":"legislative staffer","occupation":"chief of staff, state Rep. J.M. Lozano (R-Kingsville)","facebook":"","url":"http:\/\/www.mattlamon.com\/","contact":"https:\/\/twitter.com\/matthewlamon","in_office":0,"finance":"","other":""},{"id":229,"election_id":1,"district":10,"position":"council member","name":"Robert Thomas","focus":"transportation, taxation, affordability","image":"\/images\/robert_thomas.jpg","experience":"state House candidate, HD48 (2012)","occupation":"business consultant","facebook":"http:\/\/facebook.com\/VoteRobertThomas","url":"","contact":"","in_office":0,"finance":"","other":""},{"id":230,"election_id":1,"district":0,"position":"mayor","name":"Steve Adler","focus":"new 10-1 system, traffic, affordability, public education, poverty, water, environment","image":"\/images\/steve_adler.jpg","experience":"chief of staff\/general counsel for state Sen. Eliot Shapleigh; attorney (has argued civil rights cases, focuses on eminent domain defense); Anti-Defamation League Austin Region board chair; Texas Tribune board chair","occupation":"attorney","facebook":"http:\/\/facebook.com\/adlerforaustin","url":"http:\/\/www.adlerforaustin.com\/","contact":"@AdlerForAustin","in_office":0,"finance":"","other":""},{"id":231,"election_id":1,"district":0,"position":"mayor","name":"Sheryl Cole","focus":"Affordability, transportation, water, diversity, equity","image":"\/images\/sheryl_cole.jpg","experience":"Three-term City Council member; attorney and CPA; public schools advocate (former PTA president)","occupation":"Mayor Pro Tem","facebook":"http:\/\/www.facebook.com\/SherylforAustin","url":"http:\/\/www.sherylforaustin.com\/ ","contact":"@SherylCole1","in_office":1,"finance":"","other":""},{"id":232,"election_id":1,"district":0,"position":"mayor","name":"Mike Martinez","focus":"affordability, traffic and transportation, equity","image":"\/images\/mike_martinez.jpg","experience":"longtime civic activist; former firefighter and president, Austin Firefighters Association; Capital Metro board member and current chair","occupation":"City Council member (since 2006)","facebook":"http:\/\/facebook.com\/MikeMartinezforAustin ","url":"http:\/\/www.mike4mayor.com\/ ","contact":"@CouncilManMike","in_office":0,"finance":"","other":""},{"id":233,"election_id":1,"district":0,"position":"mayor","name":"Todd Phelps","focus":"transportation, environmental protection, taxation, open space","image":"\/images\/todd_phelps.jpg","experience":"energy negotiations, lending projects, farming, ranching, property management; arts and film production","occupation":"musician; businessman","facebook":"http:\/\/facebook.com\/toddphelpsmusic ","url":"http:\/\/www.phelpsforaustin.com\/ ","contact":"@PhelpsForAustin","in_office":0,"finance":"","other":""},{"id":234,"election_id":1,"district":0,"position":"mayor","name":"Randall Stephens","focus":"campaign finance reform, transportation, small business development, short term rental rates","image":"\/images\/randall_stephens.jpg","experience":"Air Force veteran","occupation":"air-craft mechanic, tech entrepreneur (CEO of AdBirds website)","facebook":"facebook.com\/StephensForAustin","url":"stephensforaustinmayor.org","contact":"@AustinBlueDog","in_office":0,"finance":null,"other":null}];



})();

(function() {

/*global Ember*/
App.Election = DS.Model.extend({
    candidates: DS.hasMany('candidate', {async: true}),
    name: DS.attr('string'),
    date: DS.attr('string'),
    description: DS.attr('string')
});

// probably should be mixed-in...
App.Election.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

// delete below here if you do not want fixtures
App.Election.FIXTURES = [{"id":1,"name":"General Election","date":"2014-06-01","description":"Rich in heavy atoms brain is the seed of intelligence stirred by starlight culture vanquish the impossible birth emerged into consciousness a still more glorious dawn awaits globular star cluster tingling of the spine, network of wormholes.","candidates":[172,173,174,175,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234]}];


})();

(function() {



})();

(function() {

App.ApplicationRoute = Ember.Route.extend({
    model: function () {
        return ['red', 'yellow', 'blue'];
    }
});


})();

(function() {

App.CandidateEditRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('candidate', this.modelFor('candidate').id);
  },
  setupController: function(controller, model){
    controller.set('model', model);
    buffer = model.get('attributes').map(function(attr){
      return { key: attr.get('key'), value: attr.get('value') }
    });
    controller.set('buffer', buffer)
  }
});



})();

(function() {

App.CandidateRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('candidate', params.candidate_id);
  }
});



})();

(function() {

App.CandidatesRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('candidate');
  }
});



})();

(function() {

App.ElectionEditRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('election', this.modelFor('election').id);
  },
  setupController: function(controller, model){
    controller.set('model', model);
    buffer = model.get('attributes').map(function(attr){
      return { key: attr.get('key'), value: attr.get('value') }
    });
    controller.set('buffer', buffer)
  }
});



})();

(function() {

App.ElectionRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('election', params.election_id);
  }
});



})();

(function() {

App.ElectionsRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('election');
  },
  districts: [1, 2, 3, 4, 5],
  currentDistrict: 4,
  setupController: function(controller, model) {
    //controller.set('model', model);

    var promises = model.map(function(election) {
      return Ember.RSVP.hash({
        election: election,
        candidates: election.get('candidates').then(function(candidates) {
          return candidates;
        })
      });
    });

    Ember.RSVP.all(promises).then(function(candidates) {
      controller.set('candidates', candidates);
    });

  }
});



})();

(function() {



})();

(function() {

App.CandidateEditView = Ember.View.extend({
});


})();

(function() {

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


})();

(function() {

App.CandidatesView = Ember.View.extend({
});


})();

(function() {

App.ElectionEditView = Ember.View.extend({
});


})();

(function() {

App.ElectionView = Ember.View.extend({
});


})();

(function() {

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


})();

(function() {

App.IndexView = Ember.View.extend({
  didInsertElement: function() {
    show_main_content(this.$('.fade-in'));
  }
});


})();

(function() {

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


})();

(function() {



})();

(function() {

App.Router.map(function () {

  this.route('map');
  this.route('about');
  
  this.resource('elections', function(){
    this.resource('election', { path: '/:election_id' }, function(){
      this.route('edit');
    });
    this.route('create');
  });
  
  this.resource('candidates', function(){
    this.resource('candidate', { path: '/:candidate_id' }, function(){
      this.route('edit');
    });
    this.route('create');
  });

});


})();

(function() {




})();
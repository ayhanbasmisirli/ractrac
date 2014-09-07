import Ember from 'ember';

var Router = Ember.Router.extend({
  location: RactracENV.locationType
});

Router.map(function() {
  this.route('overview');
  this.route('sightings');
});

export default Router;

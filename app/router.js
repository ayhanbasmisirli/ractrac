import Ember from 'ember';

var Router = Ember.Router.extend({
  location: RactracENV.locationType
});

Router.map(function() {
  this.route('overview');
  this.resource('sightings', function() {
    this.route('show', {path: '/:sighting_id'});
    this.route('new');
  });
});

export default Router;

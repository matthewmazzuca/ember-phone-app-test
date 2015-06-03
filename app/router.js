import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('properties', function() {
  	this.route('new');
  	this.route('edit', {path: '/:property_id/edit'});
  });
  // this.route('fields');
  // this.route('beacons');
});

// export default Router;

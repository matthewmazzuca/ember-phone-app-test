import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params){
		var propID = this.modelFor('property').get('id');

		return this.store.find('beacon');
	}
});

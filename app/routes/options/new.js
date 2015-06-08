import Ember from 'ember';

export default Ember.Route.extend({
	controllerName: 'option/edit',

	model: function() {
		return this.store.createRecord('option');
	},

	renderTemplate: function() {
		this.render('opion.edit');
	}
});
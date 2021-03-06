import DS from 'ember-data';

export default DS.Model.extend({
  address: DS.attr('string'),
  price: DS.attr('number'),
  agent: DS.attr('string'),
  website: DS.attr('string'),
  description: DS.attr('string'),

  lat: DS.attr('number'),
  lng: DS.attr('number'),

  fields: DS.hasMany('field', {async: true, embedded: 'always'}),
  beacons: DS.hasMany('beacon', {async: true}),
  highlights: DS.hasMany('highlight', {async: true, embedded: 'always'})
  
}).reopenClass({
	FIXTURES: [
		{
			id: 1,
			address: "63 Rollscourt Drive",
			price: "600000",
			agent: "Gleb",
			website: "www.google.com",
			description: "Dwelling",
			lat: 1,
			lng: 1,
			fields: [1],
			beacons: [1],
			highlights: [1]
		}, {
			id: 2,
			address: "52 Fifeshire Road",
			price: "600000",
			agent: "Joey",
			website: "www.yahoo.com",
			description: "Dwelling",
			lat: -100,
			lng: 100,
			fields: [2],
			beacons: [1,2],
			highlights: [2]
		}
	]
});

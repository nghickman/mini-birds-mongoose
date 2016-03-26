
var mongoose = require('mongoose');
var birdSchema = require('./Bird.js');

var sightingSchema = new mongoose.Schema({
	user: {type: Schema.types.ObjectID, ref: 'User'},
	bird: [birdSchema],
	confirmed: {type: Boolean, default: false},
	numberSeen: {type: Number, min: 1},
	user
});

module.exports = mongoose.model('Sighting', sightingSchema);


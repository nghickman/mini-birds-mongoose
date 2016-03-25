
var mongoose = require('mongoose');

var sightingSchema = new mongoose.Schema({
	name: {type: String, lowercase: true},
	order: {type: String, maxlength: 20},
	status: { 
		type: String,
		enum: [
			'extinct',
			'least concern',
			'near threatened'
			]},
	confirmed: {type: Boolean, default: false},
	numberSeen: {type: Number, min: 1}
});

module.exports = mongoose.model('Sighting', sightingSchema);


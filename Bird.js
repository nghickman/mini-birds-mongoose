var mongoose = require('mongoose');

var birdSchema = new mongoose.Schema({
	name: {type: String, lowercase: true)},
	order: {type: String, maxlength: 20},
	status: {
		type: String,
		lowercase: true,
		enum: [
		'extinct',
		'least concern',
		'near threatened'
		]}
})

module.exports = birdSchema;
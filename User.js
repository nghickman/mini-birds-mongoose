var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	email: {type: String, unique: true},
	username: {type: String},
	level: {type: Number},
	location: {type: String},
	member: {type: Boolean, default: false}
})


var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var Sighting = require('./sighting.js');

var app = express();
var port = 27017;

var mongoUri = 'mongodb://localhost:27017/mini-birds-mongoose';

app.use(bodyParser.json());
app.use(cors());

app.post('/sighting', function(req, res){
	new Sighting(req.body).save(function(err, result) {
		if(err) return res.status(500).send(err);
		else res.send(result);
	});
});

app.get('/sighting', function(req, res){
	Sighting.find(req.query)
	.exec(function(err, result){
		if (err) return res.status(500).send(err);
		else res.send(result);
	});
});

app.put('/sighting', function(req, res){
	Sighting.findByIdAndUpdate(req.query.id, req.body, function(err, result) {
		if (err) return res.status(500).send(err);
		else res.send(result);
	});
});

app.delete('/sighting', function(req, res) {
	Sighting.findByIdAndRemove(req.query.id, function(err, result) {
		if (err) return res.status(500).send(err);
		else res.send(result);
	})
})

mongoose.connect(mongoUri);

app.listen(port, function() {
  console.log('listening on port: ', port);
});
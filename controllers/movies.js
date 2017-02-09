'use strict';

var MoviesModel = require('../models/movies');


module.exports = function (router) {

    var model = new MoviesModel();

    router.get('/', function (req, res) { 
    // {} means find everything 
    Movie.find({}, function(err, movies) {
    	if (err) {
    		res.send(err);
    	}

    	// everything we want to pass here
    	var model = {
    		movies: movies
    	}

    	res.render('movies', model);
    })     
        res.render('movies', model);        
    });

};

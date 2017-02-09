'use strict';

var Movie = require('../models/movies');


module.exports = function (router) {

    var model = new Movie();

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
	    });     
    });

    // add movie form, just like in regular express
    // we can use yo kraken:template addmovies to create it automatically!!!
    // love kraken 比心比心
    router.get('/add', function(req, res) {
    	res.render('addmovies');
    })


    // Add movie POST
    router.post('/add', function(req, res) {
    	req.checkBody('title', 'Title is required').notEmpty();

    	var errors = req.validationErrors();

    	if (errors) {
    		res.render('addmovies', {error: errors});
    	} else {
    		console.log('no errors');
    		var title = req.body.title && req.body.title.trim();
    		var release_date = req.body.release_date && req.body.release_date.trim();
    		var genre = req.body.genre && req.body.genre.trim();
    		var director = req.body.director && req.body.director.trim();
    		var trailer = req.body.title && req.body.title.trim();
    	    var plot = req.body.plot && req.body.plot.trim();
    		var cover = req.body.cover && req.body.cover.trim();

    		var newMovie = new Movie({
    			title: title,
    			release_date: release_date,
    			genre: genre,
    			director: director,
    			plot: plot,
    			cover: cover,
    			trailer: trailer
    		});

    		newMovie.save(function(err) {
    			if (err) {
    				res.send(err);
    			}
    			res.redirect('/movies');
    		});
    	}
    });
};

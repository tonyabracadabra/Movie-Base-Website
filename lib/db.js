var mongoose = require('mongoose');

var db = function() {
	return {
		config: function(conf) {
			mongoose.connect('mongodb://localhost/moviebase');
			var db = mongoose.connection;
			db.on('error', console.log.bind(console, 'Connection Error'));
			// once the connection is open, we print on console...
			db.once('open', function() {
				console.log('Database is open');
			})
		}
	}
}

module.exports = db();
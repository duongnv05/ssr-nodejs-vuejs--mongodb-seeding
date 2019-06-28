let mongoose = require('mongoose');

let state = {
	db: null
};

exports.connect = function(done) {
	if(state.db) return done();

	let url = 'mongodb://root:root123123123@ds243897.mlab.com:43897/seeding-ssr-db';
	state.db = mongoose.createConnection(url, {
		useNewUrlParser: true,
		useCreateIndex: true
	}, (err) => {
		if(err) {
			done(err);
		}
	});

	done();
};

exports.get = function() {
	return state.db;
}

// exports.close = function(done) {
// 	if(state.db) {
// 		state.db.close(function(err, result) {
// 			state.db = null;
// 			state.mode = null;
// 		});
// 	}
// }
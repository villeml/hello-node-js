var fs = require('fs');

exports.getTimestamp = function(file, done){
	fs.stat(file, function(err,stats){
		if(err){
			return done(err,null);
		}
		else{
			done(null, stats.mtime);
		}
	})
	
};


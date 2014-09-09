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

exports.format = function(time){
	return time.getDate()+"."+(time.getMonth()+1)+"."+(time.getYear()+1900)
	+ " " + time.toTimeString().split(" ")[0];


}
var req = require('./module.js');

req.getTimestamp(process.argv[2], function(err, time) {

	if(err)
		console.log(err);
		
	console.log(req.format(time));
	


});
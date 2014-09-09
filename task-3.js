var req = require('./module.js');
var format = require('dateformat');
req.getTimestamp(process.argv[2], function(err, time) {

	if(err)
		console.log(err);
		
	console.log(format(time, "dd.mm.yyyy hh:MM:ss"));
	


});
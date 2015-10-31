var http = require('http');
var fs = require('fs');

var requestListener = function(req,res){
	console.log(req.url);
	res.end()
}; 

http.createServer(requestListener).listen(4000);
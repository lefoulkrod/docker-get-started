var http = require('http');

var os = require("os");
var hostname = os.hostname();

http.createServer(function(request, response){
  response.writeHead(200, {'Content-type':'text/plan'});
  response.write('Hello ' + process.env.NAME + ' ' + hostname);
  response.end( );

}).listen(80);
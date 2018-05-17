var http = require('http');

http.createServer(function(request, response){
  response.writeHead(200, {'Content-type':'text/plan'});
  response.write('Hello ' + process.env.NAME);
  response.end( );

}).listen(80);
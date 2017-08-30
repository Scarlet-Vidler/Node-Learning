var httpIp = '127.0.0.1';
var httpPort = '8888';
var http = require('http');
var server = http.createServer(function(request,result){
  require('./router').get(request,result);
}) 

server.listen(httpPort, httpIp);

console.log('listening to http://' + httpIp + ':' + httpPort)
var url = require('url');
var fs = require('fs');


exports.get = function(request, result){
  request.requrl = url.parse(request.url, true); // get the url
  var path = request.requrl.pathname;

  if(/.(css)$/.test(path)){

  	result.writeHead(200, {
  		'Content-Type': 'text/css'
  	});

  	fs.readFile(__dirname + path, 'utf8', function(err,data){
      if(err){ throw err; }
      result.write(data,'utf8');
      result.end();
  	});

  }else if(/^\/(api)/.test(path)){
  
    require('./controller/api').get(request, result); 

  }else{
    if (path === '/' || path === '/home') {
      require('./controller/home').get(request, result); 
    } else {
      require('./controller/404').get(request, result); 
    }
  }

}; 
var template = require('../views/template-main');
var data = require('../model/test-data');


exports.get = function(req, res){
  res.writeHead(200, {
  	'Content-Type' : 'text/html'
  });

  res.write(template.build('HomePage','Welcome to the Website','<p>This is the homepage.</p>'));
  res.end();
}
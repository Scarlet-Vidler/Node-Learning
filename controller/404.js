var template = require('../views/template-main');
var data = require('../model/test-data');


exports.get = function(req, res){
  res.writeHead(200, {
  	'Content-Type' : 'text/html'
  });

  res.write(template.build('Page Not Found',
  	'404 ...',
  	'<p>The Page Seems To Have Disappeared</p>'
  	));
  res.end();
}
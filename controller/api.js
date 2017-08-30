var template = require('../views/template-main');
var test_data = require('../model/test-data');


exports.get = function(req, res) {

  var data  = test_data.inspiraStaff.sort().reverse();
  console.log(data);
  var strStaff = "";

  for(var i = 0; i < data.length; i++){
  	strStaff = strStaff + '<li>' + data[i] + '</li>';
  }
  strStaff = '<ul>' + strStaff + '</ul>';

  res.writeHead(200, {
  	'Content-Type' : 'text/html'
  });

  res.write(template.build('The Inspira Team','Team ...',strStaff));
  res.end();
};
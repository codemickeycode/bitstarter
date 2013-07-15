var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

//Reads the file and outputs the contents on the screen
app.get('/', function(request, response) {
  var buf = fs.readFileSync('index.html','utf8');
  response.send(buf);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
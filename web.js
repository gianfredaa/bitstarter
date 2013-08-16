var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World Ante 123!');
  var fs = require('fs');
  var buffer = fs.readFileSync('index.html').toString();
  response.send(buffer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

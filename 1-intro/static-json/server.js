var express = require('express');
var app = express();

var counter = 0;

app.get('/', function (req, res) {
  counter++;
  setTimeout(function () {
    res.json({
      hello: 'world!',
      counter: counter
    });
  }, 5000)
});

var server = app.listen(3000, function () {
  console.log('server is listening on port', server.address().port);
});
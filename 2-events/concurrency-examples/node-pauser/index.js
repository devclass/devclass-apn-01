var express = require('express');
var app = express();

app.get('/', function (req, res) {
  setTimeout(function () {
    res.json({foo: 'bar'});
  }, 1000);
});

app.listen(4000, function () {
  console.log('server is listening on port 4000');
});
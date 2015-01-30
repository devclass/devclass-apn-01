var express = require('express');
var app = express();
var game = require('./game');

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/weapons/:weapon', function (req, res) {
  var result = game.play(req.params.weapon);
  res.render('result', result);
});

var server = app.listen(3000, function () {
  console.log('server listening on :' + server.address().port);
});

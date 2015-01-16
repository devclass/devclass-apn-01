var sleep = require('sleep').sleep;
var express = require('express');
var app = express();

var counter = 0;

var db = {
  articles: {
    fetch: function () {
      sleep(5);
      return ['article a', 'article b'];
    }
  }
};

app.get('/', function (req, res) {
  var articles = db.articles.fetch();
  res.json({articles: articles})
});

var server = app.listen(3000, function () {
  console.log('server is listening on port', server.address().port);
});
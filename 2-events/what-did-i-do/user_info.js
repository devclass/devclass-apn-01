var prompt = require('prompt');
prompt.start();

var userFetcher = require('./user_fetcher');

prompt.get(['username'], function (err, result) {
  if (err) { throw err; }

  userFetcher(result.username, function (err, user) {
    if (err) { throw err; }
    console.log('Name: ' + user.name);
    console.log('Location: ' + user.location);
  });
})
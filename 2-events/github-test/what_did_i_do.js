var request = require('request');
var async = require('async');
var http = request.defaults({
  json: true,
  headers: {
    'User-Agent': 'what_did_i_do',
    'Authorization': 'token ' + process.env.GITHUB_TOKEN
  }
});


http.get('https://api.github.com/users/dickeyxxx/events/public', function (err, _, events) {
  if (err) { throw err; }

  async.eachSeries(events, function (event, callback) {
    console.log(event.actor.login + ' did ' + event.type + ' on ' + event.repo.name);
    if (event.type === 'PushEvent') {
      http.get('https://api.github.com/repos/' + event.repo.name + '/git/commits/' + event.payload.head, function (err, _, commit) {
        if (err) { throw err; }
        console.log(commit.message);
        callback();
      });
    } else {
      callback();
    }
  }, function (err) {
    console.log('done');
  });
});

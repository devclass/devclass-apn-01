var request = require('request');
var chalk = require('chalk');
var async = require('async');
var http = request.defaults({
  json: true,
  headers: {
    'User-Agent': 'what_did_i_do',
    'Authorization': 'token ' + process.env.GITHUB_TOKEN
  }
});


http.get('https://api.github.com/users/dickeyxxx/events/public', function (err, _, events) {
  if (err) { err.toString(); }

  async.eachSeries(events, function (event, callback) {
    if (event.type === 'PushEvent') {
      console.log(chalk.blue(event.actor.login) + ' did ' + event.type + ' on ' + event.repo.name);
      http.get('https://api.github.com/repos/' + event.repo.name + '/git/commits/' + event.payload.head, function (err, _, commit) {
        if (err) { callback(err); }
        console.log(commit.message.trim());
        callback();
      });
    } else {
      callback();
    }
  }, function (err) {
    if (err) {
      console.error(err.toString());
      process.exit(1);
    }
    console.log('done');
  });
});

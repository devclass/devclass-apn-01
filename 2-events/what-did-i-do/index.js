var request = require('request');
var http = request.defaults({
  json: true,
  headers: {
    'User-Agent': 'what-did-i-do-app',
    'Authorization': 'Token e891632d92c17a54402044df477c108f4abbb728'
  }
});

http.get('https://api.github.com/users/dickeyxxx/events/public',
  function (err, _, events) {
  if (err) { throw err; }
  events.forEach(function (event) {
    if (event.type === 'PushEvent') {
      console.log(event.actor.login + " pushed a commit to " + event.repo.name);
      var url = 'https://api.github.com/repos/' + event.repo.name +
        '/git/commits/' + event.payload.head;
      http.get(url, function (err, _, commit) {
        if (err) { throw err; }
        console.log(commit.message);
      });
    }
  })
});
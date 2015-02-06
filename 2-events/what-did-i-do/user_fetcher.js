var request = require('request');
var http = request.defaults({
  json: true,
  headers: {
    'User-Agent': 'what-did-i-do-app',
    'Authorization': 'Token e891632d92c17a54402044df477c108f4abbb728'
  }
});

module.exports = function (username, callback) {
  http.get('https://api.github.com/users/' + username,
  function (err, _, user) {
    callback(err, user);
  });
}

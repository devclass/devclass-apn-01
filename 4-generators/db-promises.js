var Mongo = require('easymongo');
var db = new Mongo({dbname: 'social-app'});
var users = db.collection('users');
var Q = require('q');

Q.ninvoke(users, 'save', {name: 'dickeyxxx'})
.then(function (user) {
  console.log('added user:', user);
  return Q.ninvoke(users, 'count');
})
.then(function (count) {
  console.log('user count:', count);
})
.finally(function () {
  db.close();
});

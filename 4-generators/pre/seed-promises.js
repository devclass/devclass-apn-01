var Mongo = require('easymongo');
var Q = require('q');

var db = new Mongo({dbname: 'social'});

var users = db.collection('users');

Q.ninvoke(users, 'save', {name: 'dickeyxxx'})
.then(function (user) {
  console.log('added user:', user);
  return Q.ninvoke(users, 'count');
})
.then(function (count) {
  console.log('number of users:', count);
})
.catch(function (err) {
  console.error(err);
})
.finally(function () {
  db.close();
  console.log('done');
});

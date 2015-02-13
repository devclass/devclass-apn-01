var co = require('co');
var Mongo = require('co-easymongo');
var db = new Mongo({dbname: 'social-app'});

co(function *() {
  var users = db.collection('users');
  var user = yield users.save({name: 'dickeyxxx'});
  console.log('added user:', user);
  var count = yield users.count();
  console.log('user count:', count);
  db.close();
}).catch(function (err) {
  console.error(err);
});

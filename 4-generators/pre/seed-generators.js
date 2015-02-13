var Mongo = require('co-easymongo');
var co = require('co');

var db = new Mongo({dbname: 'social'});

co(function *() {
  var users = db.collection('users');
  var user = yield users.save({name: 'dickeyxxx'});
  console.log('added user:', user);
  var count = yield users.count();
  console.log('number of users:', count);
  db.close();
  console.log('done');
}).catch(function (err) {
  console.error(err);
});

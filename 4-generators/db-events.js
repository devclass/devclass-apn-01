var Mongo = require('easymongo');
var db = new Mongo({dbname: 'social-app'});
var users = db.collection('users');

users.save({name: 'dickeyxxx'}, function (err, user) {
  if (err) { throw err; }
  console.log('added user:', user);

  users.count(function (err, count) {
    if (err) { throw err; }
    console.log('user count:', count);
    db.close();
  });
});

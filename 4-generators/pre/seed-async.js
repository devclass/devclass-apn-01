var Mongo = require('easymongo');
var async = require('async');

var db = new Mongo({dbname: 'social'});

var users = db.collection('users');

async.waterfall([
  function (done) {
    users.save({name: 'dickeyxxx'}, done);
  },
  function (user, done) {
    console.log('added user:', user);
    users.count(done);
  },
  function (count, done) {
    console.log('number of users:', count);
    done();
  }
], function (err) {
  db.close();
  if (err) { console.error(err); }
  console.log('done');
});

var Mongo = require('easymongo');
var db = new Mongo({dbname: 'social-app'});
var users = db.collection('users');
var async = require('async');

async.waterfall([
  function (doneA) {
    users.save({name: 'dickeyxxx'}, doneA);
  },
  function (user, doneB) {
    console.log('added user:', user);
    users.count(doneB);
  },
  function (count, doneC) {
    console.log('user count:', count);
    doneC();
  }
], function (err) {
  if (err) { console.error(err); }
  db.close();
  console.log('done');
});

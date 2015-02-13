var Mongo = require('easymongo');

var db = new Mongo({dbname: 'social'});

var users = db.collection('users');

users.save({name: 'dickeyxxx'}, function (err, result) {
  if (err) { throw err; }
  console.log('added user:', result);

  users.findById(result._id, function (err, user) {
    if (err) { throw err; }

    console.log('found user:', user);

    db.close();
  });
});

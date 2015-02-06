var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/library';

function addUsers(db, cb) {
  var users = db.collection('users');
  users.update(
    {name: 'dickeyxxx'},
    {name: 'dickeyxxx'},
    {upsert: true}, function (err) {
      if (err) { return cb(err); }
    });
}

mongo.connect(url, function (err, db) {
  if (err) { throw err; }
  console.log('connected to server');
  addUsers(db, function (err) {
    if (err) { throw err; }

    addBooks(db, function (err) {
      if (err) { throw err; }

      addChapters(db, function (err) {
        if (err) { throw err; }

        db.close();
      });
    });
  });
});

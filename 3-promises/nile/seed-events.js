var mongo = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/nile";

function addBook (db, name, author, callback) {
  var books = db.collection('books');
  books.insert({name: name, author: author}, callback);
}

mongo.connect(url, function (err, db) {
  if (err) { throw err; }
  console.log('connected to db');

  addBook(db, 'Bars in Los Angeles', 'dickeyxxx', function (err) {
    if (err) { throw err; }
    addBook(db, 'Bars in Portland', 'dickeyxxx', function (err) {
      if (err) { throw err; }
      var books = db.collection('books');
      books.find({}).toArray(function (err, books) {
        if (err) { throw err; }
        console.log('there are ' + books.length + ' books');
        db.close();
      });
    });
  });
});
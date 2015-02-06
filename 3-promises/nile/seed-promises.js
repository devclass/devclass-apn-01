var Q = require('q');
var mongo = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/nile";
var db;
function addBook (name, author, callback) {
  var deferred = Q.defer();
  var books = db.collection('books');
  books.insert({name: name, author: author}, function (err, records) {
    if (err) { deferred.reject(err); }
    else { deferred.resolve(records); }
  });
  return deferred.promise;
}

Q.ninvoke(mongo, 'connect', url)
.then(function (_db) {
  db = _db;
  console.log('connected to db');
})
.then(function () {
  return addBook('Bars in Los Angeles', 'dickeyxxx');
})
.then(function () {
  return addBook('Bars in Los Portland', 'dickeyxxx');
})
.then(function () {
  var books = db.collection('books');
  var query = books.find({});
  return Q.ninvoke(query, 'toArray');
})
.then(function (books) {
  return books.length;
})
.then(function (booksCount) {
  console.log('there are ' + booksCount + ' books');
})
.catch(function (err) {
  if (err) { throw err; }
})
.finally(function () {
  db.close();
  console.log('done!');
})
.done();


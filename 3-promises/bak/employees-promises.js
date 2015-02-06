var Q = require('q');
var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/Northwind';
var db;

Q.nfcall(mongo.connect, url)
.then(function (_db) {
  db = _db;
  console.log('connected to server');
  var employees = db.collection('employees');
  var query = employees.find({});
  return Q.ninvoke(query, "toArray");
})
.then(function (employees) {
  employees.forEach(function (e) {
    console.log(e.FirstName);
  });
})
.catch(function (err) {
  console.error(err);
})
.finally(function () {
  db.close();
  console.log('done!');
});

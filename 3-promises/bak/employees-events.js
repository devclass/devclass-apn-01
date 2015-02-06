var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/Northwind';

mongo.connect(url, function (err, db) {
  if (err) { throw err; }
  console.log('connected to server');
  var employees = db.collection('employees');
  employees.find({}).toArray(function (err, employees) {
    if (err) { throw err; }
    employees.forEach(function (e) {
      console.log(e.FirstName);
    });
    db.close();
  });
});

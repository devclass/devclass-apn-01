var async = require('async');
var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/Northwind';
var db;

async.waterfall([
  function (callback) {
    mongo.connect(url, callback);
  },
  function (_db, callback) {
    db = _db;
    console.log('connected to server');
    var employees = db.collection('employees');
    employees.find({}).toArray(callback);
  },
  function (employees, callback) {
    employees.forEach(function (e) {
      console.log(e.FirstName);
    });
    db.close();
    callback();
  }

], function (err) {
  if (err) { throw err; }
  console.log('done!');
});

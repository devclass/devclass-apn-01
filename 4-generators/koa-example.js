var koa = require('koa');
var app = koa();
var Mongo = require('co-easymongo');
var db = new Mongo({dbname: 'social-app'});
var users = db.collection('users');

function foo () {
  return {users: users.count()};
}

app.use(function *() {
  this.body = yield {
    users: foo(),
    count: users.find()
  }
});

app.listen(process.argv[2]);

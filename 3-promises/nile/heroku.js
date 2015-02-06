var Heroku = require('heroku-client');
var heroku = new Heroku({token: process.env.HEROKU_API_TOKEN});

heroku.apps().list()
.then(function (apps) {
  apps.forEach(function (app) {
    if (app.name === 'dickeyxxx') {
      return app.configVars()
    }
  });
})
.then(function (configVars) {
  // do something with the config vars
})
.catch(function (err) {
  if (err) { throw err; }
})
.done();

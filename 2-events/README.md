Resources
=========

* async.js https://github.com/caolan/async
* request.js https://github.com/request/request
* http://callbackhell.com/
* What are callbacks? https://docs.nodejitsu.com/articles/getting-started/control-flow/what-are-callbacks
* nodeschool.io async.js https://github.com/bulkan/async-you

Easy homework
=============

Use more than one file to do this. You will probably need to use a callback on the file.

Medium difficulty homework
==========================

Using Node.js and async.js, show the most recent contributors to a GitHub
project based on commits along with basic profile information.

Use more than one file and a callback across them.

Example:

```
$ node recent_contributers.js heroku/heroku
=== Recent contributers

Name:         @dickeyxxx (Jeff Dickey)
Organization: Heroku
Location:     Los Angeles, CA

Name:         @pedro (Pedro Belo)
Organization: Heroku
Location:     San Francisco, CA

```

Bonus
=====

* Use [columnify](https://www.npmjs.com/package/columnify)
* Show total contributions in addition to recent contributors
* Given a command-line flag, also be able to sort based on total contributions
* Show [sparklines](https://www.npmjs.com/package/sparkline) for each member's contributions
* Use [this](https://github.com/chjj/blessed) somehow

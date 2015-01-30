Events Homework
===============

Using Node.js and async.js, show the most recent contributors to a GitHub
project based on commits along with basic profile information.

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

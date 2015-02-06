Resources
=========

* async.js https://github.com/caolan/async
* node driver https://github.com/mongodb/node-mongodb-native
* http://learnmongodbthehardway.com/

Homework
========

After running the seed script to populate a mongodb instance:

    $ node seed.js

Write a script that will, given a username, show a summary of all the books and chapters the user has written:

    $ node user_summary.js dickeyxxx

    Summary for dickeyxxx
    =====================

    Fun Bars in Los Angeles
    1. Santa Monica
    2. Downtown
    3. Hollywood

    How to be a Better Node Developer
    1. Pair Programming
    2. Unit Testing
    3. Simple != Complex

Requirements:

* Use promises

Bonus
=====

* Use [mongoose](https://www.npmjs.com/package/mongoose) and separate the models into separate files
* Implement the same solution but with events instead of promises
* Implement the same solution but with async.js's waterfall function instead of promises

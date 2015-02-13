function *foo() {
  yield 1;
  yield 2;
  yield 3;
}

var it = foo();

var message = it.next();
console.log(message);
message = it.next();
console.log(message);

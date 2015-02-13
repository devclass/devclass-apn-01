function *foo() {
  var a = yield 1;
  console.log(`a: ${a}`);
  var b = yield 2;
  console.log(`b: ${b}`);
  var c = yield 3;
  console.log(`c: ${c}`);
  return 4;
}

var g = foo();
console.log(g.next('a'));
console.log(g.next('b'));
console.log(g.next('c'));
console.log(g.next('d'));

var Iterator = require('./../');
var test = require('tape');

var longArray = new Array(1000).join(Math.random()).split('.');

var b = 0;
for (var i = longArray.length - 1; i >= 0; i--) {
  b += Number(longArray[i]);
}

var a = 0;
var testIterator = new Iterator(longArray);
testIterator.on('next', function (element) {
  a += Number(element);
  testIterator.next();
}).on('end', function () {
  

  test('equaltest', function (t) {
    t.plan(1);

    t.equal(a, b);
  });

});
testIterator.next();
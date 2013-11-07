js-array-iterator
=================

Stepping through an array is sometimes very useful...sometimes. This module is not a replacement for [async](https://github.com/caolan/async)! it is something different, I needed to call a `.next()` method to continue the stepping and an event fired if the next array item is arrived:

```javascript
var testIterator = new Iterator([0,1,2,3,4,5]);

testIterator.on('next', function (element) {
  console.log(element);
  testIterator.next();
}).on('end', function () {
  console.log('stepped through! ;)');
});

testIterator.next();
``` 

### LICENSE

MIT

[![endorse](https://api.coderwall.com/johannesboyne/endorsecount.png)](https://coderwall.com/johannesboyne)

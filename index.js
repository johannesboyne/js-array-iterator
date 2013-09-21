var EventEmitter      = require('events').EventEmitter;
var util              = require('util');

function Iterator (arr) {
  
  EventEmitter.call(this);

  this.arr_index  = undefined;
  this.arr        = arr;

  this.next = function () {
    if (this.arr_index === undefined || this.arr_index < this.arr.length) {
      this.arr_index = this.arr_index === undefined ? 0 : this.arr_index+1;

      if (this.arr === undefined || this.arr[this.arr_index] === undefined) {
        this.emit('end');
        return;
      }

      this.emit('next', this.arr[this.arr_index]);
      return;
    } else {
      this.emit('end');
      return;
    }
  };
}
util.inherits(Iterator, EventEmitter);

module.exports = Iterator;
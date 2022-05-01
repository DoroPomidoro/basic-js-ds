const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */


 class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function Queue () {
  collection = [];

  this.getUnderlyingList = function() {               //this function doesn't work
    return printArrElements(this.value, next);

    function printArrElements(value, next) {
      if (this.next === null) {
        return collection;
      }
      if (this.next !== null) {
        collection.push(value);
        value = this.value;
        next = this.next;
        return printArrElements()
      }
    }
  }

  this.enqueue = function(value) {
    collection.push(value);
};

  this.dequeue = function() {
    return collection.shift();
  }
}

module.exports = {
  Queue
};

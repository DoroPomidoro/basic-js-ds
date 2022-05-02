const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

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


class Queue {
  constructor() {
    this.first = null;
  };

  getUnderlyingList() {               
    return this.first;
  };
  enqueue(value) {
    let node = new ListNode(value);

    if (!this.first){
      this.first = node;
    } else {
      let n = this.first;
      while (n.next) {
        n = n.next;
      }
      n.next = node;
    }
};
  dequeue() {
    let temp = this.first.value;
    this.first = this.first.next;
    return temp;
  }
}

module.exports = {
  Queue
};


//getUnderLine
    // return printArrElements(this.value, next);   //this function doesn't work    
    // function printArrElements(value, next) {
    //   if (this.next === null) {
    //     return collection;
    //   } else {
    //     collection.push(value);
    //     value = this.value;
    //     next = this.next;
    //     return printArrElements(value, next);
    //   }
    // }

    // value = this.value;
    // function printArrElements(value, next) {
    //   while (value.next) {
    //     collection.push(value);
    //     value = value.next;
    //   }
    // }
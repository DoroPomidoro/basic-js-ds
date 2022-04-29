const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */

class Stack {
  arr = [];
  push(element) {
    let pushedElement = this.arr.push(element);
    return pushedElement;
  };

  pop() {
    let popElement = this.arr.pop();
    return popElement;
  };

  peek() {
    let viewedElement = this.arr[this.arr.length-1];
    return viewedElement;
  };
};



module.exports = {
  Stack
};

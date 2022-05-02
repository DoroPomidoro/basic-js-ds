const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */


//I solved this task thanks to this videos https://www.youtube.com/watch?v=hSY49AuyQ2A 
 function ListNode (value) {
  this.value = value;
  this.next = null;
}

function removeKFromList(list, value) {
let belowZero = new ListNode(-1);
belowZero.next = list;
let prev = belowZero;
let current = list;

while (current) {
  if (current.value === value) {
   prev.next = current.next;
   current = current.next;
  } else {
    prev = current;
    current = current.next;
  }
}
return belowZero.next;
}


//  function removeKFromList(l, k) {
//    let belowZero = new ListNode(-1);
//    belowZero.next = l;
//    let prev = belowZero;
//    let current = top;

//    while (current) {
//      if (current.k === k) {
//       prev.next = current.next;
//       current = current.next;
//      } else {
//        prev = current;
//        current = current.next;
//      }
//    }
//    return belowZero.next;
//  }

// function removeKFromList(l, k) {
//   let arr = [];
//   for (let i = 0; i < l.length; i++) {
//     if (k !== l[i]) {
//       arr.push(l[i]);
//     } else {
//       continue;
//     }
//   }
//   return arr;
// }



module.exports = {
  removeKFromList
};

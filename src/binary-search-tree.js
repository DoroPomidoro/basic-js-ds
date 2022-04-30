const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.roots = null;
  }

  root() {
    if (!this.roots) {
      return null;
    } else {
      return this.roots;
    }
  }

  add(value) {
    this.roots = addWithin(this.roots, value);
    
    function addWithin(node, value) {
      if (!node) {
        return new Node(value);
      }

      if (node.value === value) {
        return node;
      }

      if (value < node.value) {
        node.left = addWithin(node.left, value);
      } else {
        node.right = addWithin(node.right, value);
      }

      return node;
    } 
  }

  has(value) {
    return searchWithin(this.roots, value);

    function searchWithin(node, value) {
      if (!node) {
        return false;
      } 

      if (node.value === value) {
        return true;
      }

      if (value < node.value) {
        return searchWithin(node.left, value);
      } else {
        return searchWithin(node.right, value);
      }
    }
  }

  find(value) {
    console.log(`Hello! we are into find function ${value}`);
    return findWithin(this.roots, value);

    function findWithin(node, value) {
      if (!node) {
        console.log(`node in !node ${!node}`);
        return null;
      }

      if (node.value === value) {
        console.log(`node.value === value! It's great and correct! ${value}`);
        return value;
      }

      if (value < node.value) {
        console.log(`value < node.value ${value}`);
        return findWithin(node.left, value);
      } else {
        return findWithin(node.right, value);
      }
    }
  }

  remove(value) {
    this.roots = removeNode(this.roots, value);

    function removeNode(node, value) {
      if (!node) {
        return null;
      }

      if (value < node.value) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (value > node.value) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
          //this value equal! and it need delete from branch after follow test
        
        if (!node.left && !node.right) {
          return null;
        };

        if (!node.left) {
          node = node.right; 
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }

        //if node have both elements
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.value = minFromRight.value;

        node.right = removeNode(node.right, minFromRight.value) 
        
        return node;
      }
    }
  }

  min() {
    if (!this.roots) {
      return null;
    }

    let node = this.roots;
    while (node.left) {
      node = node.left;
    }

    return node.value;
}

  max() {
    if (!this.roots) {
      return null;
    }

    let node = this.roots;
    while (node.right) {
      node = node.right;
    }

    return node.value;
  }
}

module.exports = {
  BinarySearchTree
};
const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BinarySearchTree {

//   constructor() {
//     this.roots = null;
//   }

//   root() {
//       return this.roots;
//   }

//   add(value) {
//     this.roots = addWithin(this.roots, value);
    
//     function addWithin(node, value) {
//       if (!node) {
//         return new Node(value);
//       }

//       if (node.value === value) {
//         return node;
//       }

//       if (value < node.value) {
//         node.left = addWithin(node.left, value);
//       } else {
//         node.right = addWithin(node.right, value);
//       }

//       return node;
//     } 
//   }

//   has(value) {
//     return searchWithin(this.roots, value);

//     function searchWithin(node, value) {
//       if (!node) {
//         return false;
//       } 

//       if (node.value === value) {
//         return true;
//       }

//       if (value < node.value) {
//         return searchWithin(node.left, value);
//       } else {
//         return searchWithin(node.right, value);
//       }
//     }
//   }

//   find(value) {
//     return findWithin(this.roots, value);


//     function findWithin(node, value) {
//       if (!node) {
//         return null;
//       }

//       // while (node.value !== value) {
//       //   if (value < node.value) {
//       //     node = node.left;
//       //   } else {
//       //     node = node.right;
//       //   }
//       // }
//       // return node;

//       if (node.value === value) {
//         return node.value;
//       }

//       if (value < node.value) {
//         return findWithin(node.left, value);
//       } else {
//         return findWithin(node.right, value);
//       }
//     }
//   }

//   remove(value) {
//     this.roots = removeNode(this.roots, value);

//     function removeNode(node, value) {
//       if (!node) {
//         return null;
//       }

//       if (value < node.value) {
//         node.left = removeNode(node.left, value);
//         return node;
//       } else if (value > node.value) {
//         node.right = removeNode(node.right, value);
//         return node;
//       } else {
//           //this value equal! and it need delete from branch after follow test
        
//         if (!node.left && !node.right) {
//           return null;
//         };

//         if (!node.left) {
//           node = node.right; 
//           return node;
//         }
//         if (!node.right) {
//           node = node.left;
//           return node;
//         }

//         //if node have both elements
//         let minFromRight = node.right;
//         while (minFromRight.left) {
//           minFromRight = minFromRight.left;
//         }
//         node.value = minFromRight.value;

//         node.right = removeNode(node.right, minFromRight.value) 
        
//         return node;
//       }
//     }
//   }

//   min() {
//     if (!this.roots) {
//       return null;
//     }

//     let node = this.roots;
//     while (node.left) {
//       node = node.left;
//     }

//     return node.value;
// }

//   max() {
//     if (!this.roots) {
//       return null;
//     }

//     let node = this.roots;
//     while (node.right) {
//       node = node.right;
//     }

//     return node.value;
//   }
// }



class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.first = null;
  }

  root() {
      return this.first;
  }

  add(data) {
    this.first = addWithin(this.first, data);
    
    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }

      return node;
    } 
  }

  has(data) {
    return searchWithin(this.first, data);

    function searchWithin(node, data) {
      if (!node) {
        return false;
      } 

      if (node.data === data) {
        return true;
      }

      if (data < node.data) {
        return searchWithin(node.left, data);
      } else {
        return searchWithin(node.right, data);
      }
    }
  }

  find(data) {
    return findWithin(this.first, data);

    function findWithin(node, data) {
      if (!node) {
        return null;
      }
      // while (node.data !== data) {
      //   if (data < node.data) {
      //     node = node.left;
      //   } else {
      //     node = node.right;
      //   }
      // }
      // return node;
      
      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        return findWithin(node.left, data);
      } else {
        return findWithin(node.right, data);
      }
    }
  }

  remove(data) {
    this.first = removeNode(this.first, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
          //this data equal! and it need delete from branch after follow test
        
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
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data) 
        
        return node;
      }
    }
  }

  min() {
    if (!this.first) {
      return null;
    }

    let node = this.first;
    while (node.left) {
      node = node.left;
    }

    return node.data;
}

  max() {
    if (!this.first) {
      return null;
    }

    let node = this.first;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}



module.exports = {
  BinarySearchTree
};
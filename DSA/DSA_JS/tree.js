// Root , Node , Edge , Child , degree of node , Terminal Node , Sibling ,Leaf Node

class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  isTreeEmpty() {
    return this.root === null;
  }

  makeTree(val) {
    let newNode = new Node(val);
    if (this.isTreeEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (root.value > newNode.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  searchNode(root, val) {
    if (root === null) {
      return false;
    } else if (root.value === val) {
      return true;
    } else if (root.value > val) {
      return this.searchNode(root.left, val);
    } else if (root.value < val) {
      return this.searchNode(root.right, val);
    }
  }

  // Depth First Search
  DFSPreOrder(root) {
    if (root) {
      console.log(root.value);
      this.DFSPreOrder(root.left);
      this.DFSPreOrder(root.right);
    }
  }

  DFSInOrder(root) {
    if (root) {
      this.DFSInOrder(root.left);
      console.log(root.value);
      this.DFSInOrder(root.right);
    }
  }

  DFSPostOrder(root) {
    if (root) {
      this.DFSPostOrder(root.left);
      this.DFSPostOrder(root.right);
      console.log(root.value);
    }
  }

  // Breath First Search
  BFSTraverse(root) {
    let queue = [];
    queue.push(root);
    while (queue.length) {
      let current = queue.shift();
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
      console.log(current.value);
    }
  }

  findMin(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.findMin(root.left);
    }
  }

  findMax(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.findMax(root.right);
    }
  }

  deleteVal(root, val) {
    if (root === null) {
      return null;
    }
    if (root.value > val) {
      root.left = this.deleteVal(root.left, val);
    } else if (root.value < val) {
      root.right = this.deleteVal(root.right, val);
    } else {
      if (!root.left && !root.right) {
        return null;
      } else if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.findMin(root.right);
      root.right = this.deleteVal(root.right, root.value);
    }
    return root;
  }

  deleteNode(val) {
    this.root = this.deleteVal(this.root, val);
  }
}

let tree1 = new BST();
// console.log(tree1.isTreeEmpty());

tree1.makeTree(60);
tree1.makeTree(20);
tree1.makeTree(30);
tree1.makeTree(80);
tree1.makeTree(10);
tree1.makeTree(70);
tree1.makeTree(40);
tree1.makeTree(50);
tree1.makeTree(90);

// console.log(tree1.searchNode(tree1.root, 5));
// tree1.DFSPreOrder(tree1.root);
// tree1.DFSInOrder(tree1.root);
// tree1.DFSPostOrder(tree1.root);
// tree1.BFSTraverse(tree1.root);
// console.log(tree1.findMin(tree1.root));
// console.log(tree1.findMax(tree1.root));
tree1.deleteNode(50);
console.log(tree1);

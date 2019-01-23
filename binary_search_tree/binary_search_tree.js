class Node {
  constructor(value) {
    this.value = value;
    this.count = 1;
    this.left = null;
    this.right = null;
  }

  search = value => {
    if (value == this.value) {
      return this;
    } else if (value < this.value && this.left) {
      return this.left.search(value);
    } else if (this.right) {
      return this.right.search(value);
    } else {
      return null;
    }
  };

  addLeftChild = child => {
    if (this.left) {
      this.left.addChild(child);
    } else {
      let newNode = new Node(value);
      this.left = newNode;
    }
  };

  addRightChild = child => {
    if (this.right) {
      this.right.addChild(child);
    } else {
      let newNode = new Node(value);
      this.right = newNode;
    }
  };

  addChild = child => {
    if (child == this.value) {
      this.count++;
    } else if (child < this.value) {
      addLeftChild(child);
    } else {
      addRightChild(child);
    }
  };
}

class Tree {
  constructor() {
    this.root = null;
  }

  addNode = value => {
    if (this.root) {
      this.root.addChild(value);
    } else {
      let newNode = new Node(value);
      this.root = newNode;
    }
  };

  search = value => {
    return this.root.search(value);
  };
}

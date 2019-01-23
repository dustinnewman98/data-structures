class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  /**
   * Returns the value of the head of the list
   */
  first() {
    if (this.head) {
      return this.head.value;
    }
  }

  /**
   * Returns the value of the tail of the list
   */
  last() {
    if (this.tail) {
      return this.tail.value;
    }
  }

  /**
   * Inserts a node at the end of the list
   *
   * @param value - The value of the node
   */
  append(value) {
    let newNode = new Node(value);

    if (this.tail) {
      // We have existing element(s)

      // newNode should point to the old end of the list
      newNode.prev = this.tail;

      // The old tail should point to newNode as its next node
      this.tail.next = newNode;

      // The new tail should now be newNode
      this.tail = newNode;
    } else {
      // We have an empty list
      this.head = newNode;
      this.tail = newNode;
    }

    // Increment our size
    this.size++;
  }

  /**
   * Inserts a node at the beginning of the list
   *
   * @param value - The value of the node
   */
  prepend(value) {
    let newNode = new Node(value);

    if (this.head) {
      // We have existing element(s)

      // newNode should point to the old beginning of the list
      newNode.next = this.head;

      // The old head should point to newNode as its previous node
      this.head.prev = newNode;

      // The new head should now be newNode
      this.head = newNode;
    } else {
      // We have an empty list
      this.head = newNode;
      this.tail = newNode;
    }

    // Increment our size
    this.size++;
  }

  /**
   * Insert a new node at a specific index.
   * Inserting at index 0 is equivalent to calling prepend
   * Inserting at index this.size is equivalent to calling append
   *
   * @param index - The positive index at which to insert the new node
   * @param value - The value of the new node
   *
   * @throws Argument index must be non-negative number.
   * @throws Argument index must be within range of current list.
   */
  insertAt(index, value) {
    // We optimize calls to this.size by storing the size, which will not change until the end of the function, as a constant
    const listSize = this.size;

    if (index < 0) {
      throw "Argument index must be non-negative number.";
    } else if (index > listSize && index > 0) {
      throw "Argument index must be within range of current list.";
    }

    if (index == 0) {
      prepend(value);
      return;
    } else if (index == listSize) {
      append(value);
      return;
    }

    // Create new node
    let newNode = new Node(value);

    let it = 0;
    let prev = null;
    let next = this.head;
    while (it < index) {
      it++;
      prev = next;
      next = next.next;
    }

    newNode.prev = prev;
    newNode.next = next;
    prev.next = newNode;
    next.prev = newNode;

    this.size++;
  }

  deleteAt(index) {
    const listSize = this.size;

    if (index < 0) {
      throw "Argument index must be non-negative number.";
    } else if (index >= listSize && index > 0) {
      throw "Argument index must be within range of current list.";
    }

    if (listSize == 1) {
      this.head = null;
      this.tail = null;
      this.size = 0;
      return;
    }

    let ret;
    if (index == 0) {
      ret = this.head;
      this.head = this.head.next;
      this.head.prev = null;
    } else if (index == listSize - 1) {
      ret = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      let it = 0;
      let prev = null;
      let next = this.head;

      while (it < index) {
        it++;
        prev = next;
        next = next.next;
      }

      next.next.prev = prev;
      prev.next = next.next;

      next.prev = null;
      next.next = null;
      ret = next.value;
    }

    this.size--;
    return ret;
  }

  /**
   *
   * @param {*} value - The value being searched for
   */
  contains(value) {
    let curr = this.head;

    while (curr) {
      if (curr.value === value) {
        return true;
      }
      curr = curr.next;
    }

    return false;
  }
}

module.exports = LinkedList;

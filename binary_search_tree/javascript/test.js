const BinarySearchTree = require("./binary_search_tree.js");
const assert = require("assert");

let myTreeA = new BinarySearchTree();

myTreeA.addNode(7);
myTreeA.addNode(8);
myTreeA.addNode(6);

let node8 = myTreeA.search(8);
assert(node8);
assert(node8.count === 1);

myTreeA.addNode(8);
assert(node8.count === 2);

myTreeA.addNode(13);
assert(myTreeA.search(13));
assert(!myTreeA.search(14));

console.log("Binary search tree test cases passed!");

const LinkedList = require("./linked_list.js");
const assert = require("assert");

let myListA = new LinkedList();

myListA.prepend(2);

assert(myListA.size === 1);
assert(myListA.first() === 2);

myListA.append(4);

assert(myListA.size === 2);
assert(myListA.first() === 2);
assert(myListA.last() === 4);

assert(myListA.contains(2));
assert(myListA.contains(4));

console.log("Linked list test cases passed!");

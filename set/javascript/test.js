const Set = require("./set.js");
const assert = require("assert");

let mySetA = new Set([2, 4, 6]);

assert(mySetA.contains(2));
assert(!mySetA.contains(3));

let mySetB = new Set([2, 4]);

assert(mySetA.hasSubset(mySetB));
assert(mySetB.isSubset(mySetA));
assert(!mySetA.isSubset(mySetB));

let mySetC = new Set([2, 4, 3]);

assert(!mySetA.hasSubset(mySetC));

console.log("Set test cases passed!");

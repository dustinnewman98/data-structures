const is_palindrome = require("./palindrome");
const assert = require("assert");

assert(!is_palindrome("dustin"));
assert(is_palindrome("bob"));
assert(is_palindrome("racecar"));
assert(is_palindrome("abba"));
assert(is_palindrome("ab ba"));

console.log("Palindrome test cases passed!");

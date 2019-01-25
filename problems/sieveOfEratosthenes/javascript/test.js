const sieveOfEratosthenes = require("./sieveOfEratosthenes");
const assert = require("assert");

let primesOf7 = sieveOfEratosthenes(7);
assert(
  primesOf7[0] === 2 &&
    primesOf7[1] === 3 &&
    primesOf7[2] === 5 &&
    primesOf7[3] === 7 &&
    primesOf7.length === 4
);

let primesOf2 = sieveOfEratosthenes(2);
assert(primesOf2[0] === 2 && primesOf2.length === 1);

let primesOf1 = sieveOfEratosthenes(1);
assert(primesOf1.length === 0);

console.log("Sieve of Eratosthenes test cases passed!");

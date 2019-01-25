function sieveOfEratosthenes(max) {
  const boolean_array = new Array(max + 1);
  boolean_array[0] = false;
  boolean_array[1] = false;

  for (let i = 2; i <= max; i++) {
    boolean_array[i] = true;
  }

  let primes = [];
  for (let curr = 2; curr <= max; curr++) {
    if (boolean_array[curr]) {
      // The current number is prime!
      primes.push(curr);

      // Now mark all multiples as NOT prime (i.e. false)
      for (let multiple = curr * 2; multiple <= max; multiple += curr) {
        boolean_array[multiple] = false;
      }
    }
  }

  return primes;
}

module.exports = sieveOfEratosthenes;

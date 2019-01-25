func sieveOfEratosthenes(for max: Int) -> [Int] {
  var bool_array: [Bool] = Array(repeating: true, count: max + 1)
  bool_array[0] = false;
  bool_array[1] = false;

  var primes: [Int] = []

  for num in stride(from: 2, through: max, by: 1) {
    if bool_array[num] == true {
      primes.append(num)

      var multiple = num * 2
      while (multiple <= max) {
        bool_array[multiple] = false
        multiple *= num
      }
    }
  }

  return primes
}
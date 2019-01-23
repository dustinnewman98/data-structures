import Foundation

var set = CustomSet<Int>()

assert(set.count == 0)

set.add(2)

assert(set.count == 1)

assert(set.contains(2))
assert(!set.contains(3))

set.add(3)

assert(set.count == 2)
assert(set.contains(3))

set.remove(3)
assert(!set.contains(3))

assert(set.count == 1)

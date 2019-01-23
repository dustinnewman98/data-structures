import Foundation

public struct CustomSet<T: Hashable> {
  // The core dictionary used for storage
  private var _set: [T: Bool] = [:]

  // Only the setter is private
  // Anything else can GET the count property
  public private(set) var count: Int = 0

  public init() {}

  mutating public func add(_ key: T) -> Bool {
    if self._set[key] == true {
      // Element already exists
      return false
    }

    // Element does not exist
    // Add it
    self._set[key] = true
    // Increment count
    self.count += 1
    // Return true
    return true
  }

  mutating public func remove(_ key: T) -> Bool {
    if self._set[key] == true {
      // Value exists in set
      // Remove it
      self._set.removeValue(forKey: key)
      // Decrement count
      self.count -= 1
      // Return true because it was removed
      return true
    } else {
      // Value is not in set, return false
      return false
    }
  }

  public func contains(_ key: T) -> Bool {
    if self._set[key] == true {
      return true
    }
    return false
  }
}

// extension Multiset: ExpressibleByArrayLiteral {
//   public init(arrayLiteral values: T...) {
//     self.init(values)
//   }
// }
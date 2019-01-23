import Foundation

public class Node<T: Equatable & Comparable> {
  fileprivate var value: T
  fileprivate private(set) var count: Int
  fileprivate var left: Node<T>?
  fileprivate var right: Node<T>?

  fileprivate init(_ value: T) {
    self.value = value
    self.count = 1
  }

  func search(for value: T) -> Node<T>? {
    if (self.value == value) {
      return self
    } else if
        value < self.value,
        let left = self.left
    {
        return left.search(for: value)
    } else if let right = self.right {
        return right.search(for: value)
    } else {
        return nil
    }
  }

  func addLeftChild(_ value: T) {
    if let left = self.left {
      left.addChild(value)
    } else {
      self.left = Node(value)
    }
  }

  func addRightChild(_ value: T) {
    if let right = self.right {
      right.addChild(value)
    } else {
      self.right = Node(value)
    }
  }

  fileprivate func addChild(_ value: T) {
    if value == self.value {
      self.count += 1
    } else if (value < self.value) {
      self.addLeftChild(value)
    } else {
      self.addRightChild(value)
    }
  }
}

public class BinarySearchTree<T: Equatable & Comparable> {
  private var root: Node<T>?

  public init() {}

  public func addNode(withValue value: T) {
    if let root = self.root {
      root.addChild(value)
    } else {
      self.root = Node(value)
    }
  }

  public func search(for value: T) -> Node<T>? {
    return self.root?.search(for: value)
  }
}

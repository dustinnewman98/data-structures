import Foundation

var myTree = BinarySearchTree<Int>()

myTree.addNode(withValue: 2)

assert(myTree.search(for: 2) != nil)

myTree.addNode(withValue: 2)

let dupNode = myTree.search(for: 2)
dump(dupNode)

assert(dupNode != nil)

myTree.addNode(withValue: 4)

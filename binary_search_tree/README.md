# Binary Search Tree

A collection of nodes ordered in such a way that:

1. Every node has a value.
2. Every node has zero or one left _children_ that has a value **less** than itself.
3. Every node has zero or one right children that has a value **greater** than itself.

Since binary search trees are - unsurprisingly - often used for searching, my implementation also provides that every node is **unique** and thus also contains a `count`. Thus, if a tree already contains a node with `value` 8 and you try to insert 8 again, it will simply update the `count` of the node containing 8.

# Tree Breadth First Search

## Table of contents
1. [Binary Tree Level Order Traversal (easy)](#Binary-Tree-Level-Order-Traversal)
2. [Reverse Level Order Traversal (easy)](#Reverse-Level-Order-Traversal)

### Binary Tree Level Order Traversal

```
Given a binary tree, populate an array to represent its level-by-level traversal. You should populate the values of all nodes of each level from left to right in separate sub-arrays.
```
```
**Example 1:**

[[1],                1
[2,3],             2   3
[4,5,6,7]]       4 5   6 7

**Example 1:**

[[12,                12
[7,1],               7  1
[9,10,5]]            9  10 5
```
```js

function traverse_tree(root) {
    let result =  [];

    if(root === null) {
        return result
    };

    let queue = new Deque();
    queue.push(root);

    while(queue.length > 0) {
        let currentLevel = [];

        for(i = 0; i < queue.length; i++) {
            let currentNode = queue.shift();
            currentLevel.push(currentNode.val);

            if(currentNode.left !== null) {
                queue.push(currentNode.left)
            };

            if(currentNode.right !== null) {
                queue.push(currentNode.right)
            };
        }
        result.push(currentLevel)
    }
    return result 
}
```
> **Time: O(N)**<br>
> **Space: O(N)**

### Reverse Level Order Traversal
```
Given a binary tree, populate an array to represent its level-by-level traversal in reverse order, i.e., the lowest level comes first. You should populate the values of all nodes in each level from left to right in separate sub-arrays.
```
```
**Example 1:**
[[4,5,6,7],          1
[2,3],             2  3
[1]]             4 5  6 7

**Example 2:**
[[9,10,5],     12
[7,1],        7  1
[12]]         9  10 5
```
```js
function traverse_tree(root) {

    let result = new Deque();
    if(root  === null) {
        return result
    };
    let queue = new Deque();
    let queueLength = queue.length ;

    while(queueLength > 0) {
        let currentNode = queue.shift();
        let  currentLevel = [];

        for(i = 0; i  < queueLength; i++) {



        }


    }


}

```
> **Time: O(N)**<br>
> **Space: O(N)**
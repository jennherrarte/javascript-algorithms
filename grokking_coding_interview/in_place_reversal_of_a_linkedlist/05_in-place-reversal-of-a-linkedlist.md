# In Place Reversal of a Linked List

## Table of contents
1. [Reverse a LinkedList (easy)](#Reverse-a-LinkedList)

### Reverse a LinkedList 
```
Given the head of a Singly LinkedList, reverse the LinkedList. Write a function to return the new head of the reversed LinkedList.
```
```
**Example 1:**
Nodes of original LinkedList are: 2 4 6 8 10 
Nodes of reversed LinkedList are: 10 8 6 4 2 
```
```js
function reverse_list() {
    let current = head;
    let previous = null;

    while(current !== null) {
        let next = current.next;
        current.next = previous;
        current = next;
        previous = current;
    }
    return previous
}

```

> **Time: O(N)**<br>
> **Space: O(1)**
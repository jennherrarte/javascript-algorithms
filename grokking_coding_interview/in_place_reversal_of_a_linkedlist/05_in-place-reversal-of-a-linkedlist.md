# In Place Reversal of a Linked List

## Table of contents
1. [Reverse a LinkedList (easy)](#Reverse-a-LinkedList)
2. [Reverse a Sub-list (medium)](#Reverse-a-Sub-List)

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

```
> **Time: O(N)**<br>
> **Space: O(1)**
### Reverse a Sub-list 
```
Given the head of a LinkedList and two positions ‘p’ and ‘q’, reverse the LinkedList from position ‘p’ to ‘q’.
```
```
**Example 1:**
p = 2
q = 4
Nodes of original LinkedList are: 1 2 3 4 5
Nodes of reversed LinkedList are: 1 4 3 2 5
```
```js
function reverse_sub_list(head, p, q) {
    if(p === q) {
        return head;
    }

    let current = head;
    let previous = null;
    let i = 0;

    while (current !== null && i < p - 1) {
        previous = current 
        current = current.next
        i++
    }

    let last_node_of_the_first_part = previous;
    let last_node_of_the_sub_list = current;
    let next = null;
    i = 0;

    while(current !==  null && i < q - p + 1) {
        next = current.next;
        current.next = previous;
        previous = current; 
        current = next;
        i++
    }

    if(last_node_of_the_first_part !== null) {
        last_node_of_the_first_part.next = previous;
    } else {
        head = previous;
    }

    last_node_of_the_sub_list.next = current;
    return head;
}

```
> **Time: O(N)**<br>
> **Space: O(1)**

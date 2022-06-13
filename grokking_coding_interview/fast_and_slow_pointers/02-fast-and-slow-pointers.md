# Fast and Slow Pointers
## Table of contents
1. [LinkedList Cycle (easy)](#LinkedList-Cycle)
1.5 [Length of Linked List Cycle (easy)](#Length-of-Linked-List-Cycle)
2. [Start of LinkedList Cycle (medium)](#Start-of-LinkedList-Cycle)

### LinkedList Cycle
```
Given the head of a Singly LinkedList, write a function to determine if the LinkedList has a cycle in it or not.
```
```
   class Node {
        constructor(value, next = null) {
            this.value = value
            this.next = next
        }
    }

**Example 1:**
 const head = new Node(1)
    head.next = new Node(2)
    head.next.next = new Node(3)
    head.next.next.next = new Node(4)
    head.next.next.next.next = new Node(5)
    head.next.next.next.next.next = new Node(6)
    head.next.next.next.next.next.next = head.next.next

Output: true

**Example 2:**
const head = new Node(1)
    head.next = new Node(2)
    head.next.next = new Node(3)
    head.next.next.next = new Node(4)
    head.next.next.next.next = new Node(5)
    head.next.next.next.next.next = new Node(6)

Output: false

**Example 3:**
 const head = new Node(1)
    head.next = new Node(2)
    head.next.next = new Node(3)
    head.next.next.next = new Node(4)
    head.next.next.next.next = new Node(5)
    head.next.next.next.next.next = new Node(6)
    head.next.next.next.next.next.next = head.next.next.next

Output: true
```
```js
function hasCycle(head) {
    let slow = head
    let fast = head

    while(fast !== null && fast.next !== null) {
        fast = fast.next.next
        slow = slow.next

        if(slow === fast) {
            return true
        }
    }

    return false
}

```
> **TC: O(N)**<br>
> **SC: O(1)**
### Length of Linked List Cycle
```
Given the head of a LinkedList with a cycle, find the length of the cycle.
```
```
class Node {
    constructor(value, next = null) {
        this.value = value
        this.next = next
    }
}

**Example 1:**
 const head = new Node(1)
    head.next = new Node(2)
    head.next.next = new Node(3)
    head.next.next.next = new Node(4)
    head.next.next.next.next = new Node(5)
    head.next.next.next.next.next = new Node(6)
    head.next.next.next.next.next.next = head.next.next

Output: 4

**Example 2:**
 const head = new Node(1)
    head.next = new Node(2)
    head.next.next = new Node(3)
    head.next.next.next = new Node(4)
    head.next.next.next.next = new Node(5)
    head.next.next.next.next.next = new Node(6)
    head.next.next.next.next.next.next = head.next.next.next

Output: 3
```
```js
function find_cycle_length(head) {
    let slow = head
    let fast = head 

    while(fast !== null && fast.next !== null) {
        fast = fast.next.next
        slow = slow.next

        if(slow === fast) {
            return count_cycle(slow)
        }
    }

    return false
}

function count_cycle(slow) {
    let cycleLength = 0
    let current = slow 

    while(true) {
        current = current.next
        cycleLength += 1

        if(current === slow) {
            break
        }
    }

    return cycleLength 
}

```
> **TC: O(N)**<br>
> **SC: O(1)**

### Start of LinkedList Cycle 
```
Given the head of a Singly LinkedList that contains a cycle, write a function to find the starting node of the cycle.
```
```
class Node {
    constructor(value, next = null) {
        this.value = value
        this.next = next
    }
}

**Example 1:**
const head = new Node(1);
    head.next = new Node(2);
    head.next.next = new Node(3);
    head.next.next.next = new Node(4);
    head.next.next.next.next = new Node(5);
    head.next.next.next.next.next = new Node(6);
    head.next.next.next.next.next.next = head.next.next;

Output: 3

**Example 2:**
 const head = new Node(1);
    head.next = new Node(2);
    head.next.next = new Node(3);
    head.next.next.next = new Node(4);
    head.next.next.next.next = new Node(5);
    head.next.next.next.next.next = new Node(6);
    head.next.next.next.next.next.next = head.next.next.next;

Output: 4

**Example 3:**
  const head = new Node(1);
    head.next = new Node(2);
    head.next.next = new Node(3);
    head.next.next.next = new Node(4);
    head.next.next.next.next = new Node(5);
    head.next.next.next.next.next = new Node(6);
    head.next.next.next.next.next.next = head

Output: 1
```
```js

function find_cycle_start(head) {
    let slow = head
    let fast = head
    let cycleLength = 0
    let start = 0

    while(fast !== null && fast.next !== null)  {
        fast = fast.next.next
        slow = slow.next

        if(fast === slow) {
            cycleLength = find_cycle_length(slow)
            break
        }
    }

    start = find_start(cycleLength, head)
    return start.value
}

function find_cycle_length(slow) {
    let count = 0 
    let current = slow

    while(true) {
        current = current.next
        counter++

        if(current === slow) {
            break
        }
    }
    return count  
}

function find_start(cycleLength, head) {
    let pointer1 = head
    let pointer2 = head
    
    while(cycleLength > 0) {
        pointer2 = pointer2.next
        cycleLength--
    }
    
      while(pointer1 !== pointer2) {
        pointer1 = pointer1.next
        pointer2 = pointer2.next
    }

    return pointer1
}

```
> **TC: O(N)**<br>
> **SC: O(1)**

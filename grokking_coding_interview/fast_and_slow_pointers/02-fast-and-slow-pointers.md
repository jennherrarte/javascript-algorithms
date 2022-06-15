# Fast and Slow Pointers
## Table of contents
1. [LinkedList Cycle (easy)](#LinkedList-Cycle)
1.5 [Length of Linked List Cycle (easy)](#Length-of-Linked-List-Cycle)
2. [Start of LinkedList Cycle (medium)](#Start-of-LinkedList-Cycle)
3. [Happy Number (medium)](#Happy-Number)
4. [Middle of the LinkedList (easy)](#Middle-of-the-LinkedList)
5. [Palindrome LinkedList (medium)](#Palindrome-LinkedList)

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

### Happy Number
```
Any number will be called a happy number if, after repeatedly replacing it with a number equal to the sum of the square of all of its digits, leads us to number ‘1’. All other (not-happy) numbers will never reach ‘1’. Instead, they will be stuck in a cycle of numbers which does not include ‘1’.
```
```
**Example 1:**
Input: 23   
Output: true (23 is a happy number)  

**Example 2:**
Input: 12   
Output: false (12 is not a happy number)  
```
```js
function find_happy_number(num) {
    let fast = num 
    let slow = num

    while(true) {
        fast = find_square(find_square(fast))
        slow = find_square(slow)

        if(fast === slow) {
            break
        }
    }
    return slow === 1
}

function find_square(num) {
    let sum = 0

    while(num > 0) {
        digit = num % 10
        sum += digit * digit 
        num = Math.floor(num / 10)
    }
    return sum 
}
```
> **TC: O(logN)**<br>
> **SC: O(1)**

### Middle of Linked List

```
Given the head of a Singly LinkedList, write a method to return the middle node of the LinkedList.

If the total number of nodes in the LinkedList is even, return the second middle node.
```
```
**Example 1:**
Input: 1 -> 2 -> 3 -> 4 -> 5 -> null
Output: 3

**Example 2:**
Input: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
Output: 4

**Example 3:**
Input: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> null
Output: 4
```
```js
function find_middle_node(head) {
    let slow = head
    let fast = head 

    while(fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
    }

    return slow.value
}
```
> **TC: O(N)**<br>
> **SC: O(1)**

### Palindrome LinkedList
```
Given the head of a Singly LinkedList, write a method to check if the LinkedList is a palindrome or not.

Your algorithm should use constant space and the input LinkedList should be in the original form once the algorithm is finished. The algorithm should have O(N) time complexity where ‘N’ is the number of nodes in the LinkedList
```
```
**Example 1:**
Input: 2 -> 4 -> 6 -> 4 -> 2 -> null
Output: true

**Example 2:**
Input: 2 -> 4 -> 6 -> 4 -> 2 -> 2 -> null
Output: false
```
```js

function is_palindrome(head) {
    if(head === null || head.next === null) {
        return  true
    }

    let fast = head
    let slow =  head

    while(fast !== null && fast.next !== null) {

        fast = fast.next.next
        slow = slow.next
    }

    let reversedHead = reverse(slow)
    let reversedHeadCopy = reversedHead

    while(reversedHead !== null && head !== null) {

        if(reversedHea.value !== head.value) {
            break
        }
        reversedHead = reversedhead.next
        head = head.next
    }

    reverse(reversedHeadcopy)

    if(reverseHead === null || head === null) {
        return true
    }
    
    return false

}

function reverse(current) {
    let prev = null

    while(current !== null) {
        next = current.next
        current.next = prev
        prev = current
        current = next
    }
    
    return prev
}

```
> **TC: O(N)**<br>
> **SC: O(1)**
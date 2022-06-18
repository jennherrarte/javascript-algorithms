# Fast and Slow Pointers
## Table of contents
1. [LinkedList Cycle (easy)](#LinkedList-Cycle)
1.5 [Length of Linked List Cycle (easy)](#Length-of-Linked-List-Cycle)
2. [Start of LinkedList Cycle (medium)](#Start-of-LinkedList-Cycle)
3. [Happy Number (medium)](#Happy-Number)
4. [Middle of the LinkedList (easy)](#Middle-of-the-LinkedList)
5. [Palindrome LinkedList (medium)](#Palindrome-LinkedList)
6. [Rearrange a LinkedList (medium)](#Rearrange-a-LinkedList)
7. [Cycle in a Circular Array (hard)](#Cycle-in-a-Circular-Array)

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

### Rearrange a LinkedList 

```
Given the head of a Singly LinkedList, write a method to modify the LinkedList such that the nodes from the second half of the LinkedList are inserted alternately to the nodes from the first half in reverse order. So if the LinkedList has nodes 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null, your method should return 1 -> 6 -> 2 -> 5 -> 3 -> 4 -> null.

Your algorithm should not use any extra space and the input LinkedList should be modified in-place.
```
```
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }


  print_list() {
    temp = this;
    while (temp !== null) {
      process.stdout.write(`${temp.value} `);
      temp = temp.next;
    }
    console.log();
  }
}

**Example 1:**
    const head = new Node(2);
        head.next = new Node(4);
        head.next.next = new Node(6);
        head.next.next.next = new Node(8);
        head.next.next.next.next = new Node(10);
        head.next.next.next.next.next = new Node(12);

Output: 2 12 4 10 6 8 

```
```js
function reorder_linked_list(head) {
    if(head === null || head.next == null) {
        return 
    }

    let fast = head
    let slow = head

    while(fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
    }

    let secondHalfHead = reverse(slow)
    let firstHalfHead = head

    while(secondHalfHead !== null && firstHalfHead !== null) {
        let temp = firstHalfHead.next
        firstHalfHead.next = secondHalfHead
        firstHalfHead = temp 

        temp = secondHalfHead.next 
        secondHalfHead.next = firstHalfHead
        secondHalfHead = temp
    }

    if(firstHalfHead !== null) {
        firstHalfHead.next = null
    }
}

function reverse(current) {
    let prev = null

    while(current !== null) {
        let next = current.next
        current.next = prev
        prev = current 
        current = next 
    }

    return prev
}

```
> **TC: O(N)**<br>
> **SC: O(1)**

### Cycle in a Circular Array 

```
We are given an array containing positive and negative numbers. Suppose the array contains a number ‘M’ at a particular index. Now, if ‘M’ is positive we will move forward ‘M’ indices and if ‘M’ is negative move backwards ‘M’ indices. You should assume that the array is circular which means two things:

If, while moving forward, we reach the end of the array, we will jump to the first element to continue the movement.
If, while moving backward, we reach the beginning of the array, we will jump to the last element to continue the movement.
Write a method to determine if the array has a cycle. The cycle should have more than one element and should follow one direction which means the cycle should not contain both forward and backward movements.

```
```
**Example 1:**
Input: [1, 2, -1, 2, 2]
Output: true
Explanation: The array has a cycle among indices: 0 -> 1 -> 3 -> 0

**Example 2:**
Input: [2, 2, -1, 2]
Output: true
Explanation: The array has a cycle among indices: 1 -> 3 -> 1

**Example 3:**
Input: [2, 1, -1, -2]
Output: false
Explanation: The array does not have any cycle.
```
```js
function has_cycle(arr) {
    for(i = 0; i < arr.length; i++) {
        let isForward = arr[i] >= 0
        let slow = i
        let fast = i

        while(true) {
            slow = find_next_index(arr, isForward, slow) // keep moving pointers while true
            fast = find_next_index(arr, isForward, fast)

            if(fast !== -1) {
                fast = find_index_index(arr, isForward, fast)
            }
                // conidtion to break and move onto next index
            if(slow === -1 || fast === -1 || slow === fast) {
                break // need this condition to break the loop if we don't have the cycle but can move on to the next index in for loop
            }
        }
        // loop breaks,  we return true if cycle found
        if(slow !== -1 && slow === fast) {
            return true // outside of while loop because otherwise it would keep going because while  true
        }
    }
    return false // no cycle found in entire  array
}

function find_next_index(arr, isForward, currentIndex) {
    let direction = arr[currentIndex] >= 0

    if(direction !== isForward) {
        return -1
    }

    let nextIndex = (arr[currentIndex] + currentIndex) % arr.length

    if(nextIndex < 0) {
        nextIndex += arr.length
    }

    if(nextIndex === currentIndex) {
        return -1
    }

    return nextIndex
}

```
> **TC:O(n²)**<br>
> **SC: O(1)**
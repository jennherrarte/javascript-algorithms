## Chapter 1 - Intro  to Algorithms 
- binary search is a lot faster than simple search
- O(log n) is faster than O(n), but it gets a lot faster once the list of iteems you're seearching through grows 
- algorithm times are measured in terms of growtho of an algorithm 
- algorithm timse are written in Big O notation 

### Common Big O Run Times 
- O(log n) / log time / example: binary search 
- O(n) / linear time / example: simple search 
- O(n * log n) / example: fast sorting algorithm 
- O(n²) / example: a slow sorting algorithm like selection sort 
- O(n!) / example: really  slow algorithm 
## Chapter 2 - Selection Sort  
- arrays and linked lists are good for storing multiple element
### Arrays
- arrays allow for fast reads, better for random acccess

Run times for common operations <br>
- **reading** - O(1)  <br>
- **insertion** - O(n)  <br>
- **deletion** - O(n)

### Linked Lists
- linked lists allow fast inserts and deletes 
- link list - elements are strewn all over and each element stores the address to the next one 

Run times for common operations <br>
- **reading** - O(n) <br>
- **insertion** - O(1) <br>
- **deletion** - O(1) <br>

## Chapter 3 - Recursion 
- recursion is  when a functional calls itself
- every recursive function has two parts:  the base case and recursive case 
- recursive case - when the functional calls itself 
- base case - when the function doesn't call itself again (avoid infinite loop)
- stack - when you call a function from  another function, the calling function is paused in a  partially completed space
- stack has two operations: push and pop 
- all function calls go onto the call stack
- call stack can get very large which takes up a lot of memory



# Cyclic Sort

## Table of contents

1. [Cyclic Sort (easy)](#Cyclic-Sort)
2. [Find the Missing Number (easy)](#Find-the-Missing-Number)
3. [Find all Missing Numbers (easy)](#Find-all-Missing-Numbers)
4. [Find the Duplicate Number (easy)](#Find-the-Duplicate-Number)
/ 4.5. [Find the Duplicate Number (easy)](#Find-the-Duplicate-Number)
5. [Find all Duplicate Numbers (easy)](#Find-all-Duplicate-Numbers)
### Cylic Sort 

```
We are given an array containing n objects. Each object, when created, was assigned a unique number from the range 1 to n based on their creation sequence. This means that the object with sequence number 3 was created just before the object with sequence number 4.

Write a function to sort the objects in-place on their creation sequence number in O(n)
and without using any extra space. For simplicity, let’s assume we are passed an integer array containing only the sequence numbers, though each number is actually an object.
```
```
**Example 1:**
Input: [3, 1, 5, 4, 2]
Output: [1, 2, 3, 4, 5]

**Example 2:**
Input: [2, 6, 4, 3, 1, 5]
Output: [1, 2, 3, 4, 5, 6]

**Example 3:**
Input: [1, 5, 6, 4, 3, 2]
Output: [1, 2, 3, 4, 5, 6]
```
```js
function cyclic_sort(nums) {
    let i = 0;
    while(i < nums.length) {
        let j = nums[i] - 1;

        if(nums[i] !== nums[j]) {
           [nums[i], nums[j]] = [nums[i], nums[j]]
        } else {
            i++
        }
    };
 
    return nums;
}
```

> **Time: O(n)**<br>
> **Space: O(1)**

### Find the Missing Number
```
We are given an array containing n distinct numbers taken from the range 0 to n. Since the array has only n numbers out of the total n+1 numbers, find the missing number.
```
```
**Example 1:**
Input: [4, 0, 3, 1]
Output: 2

**Example 2:**
Input: [8, 3, 5, 2, 4, 6, 0, 1]
Output: 7
```
```js
function find_the_missing_number(nums) {
    let i = 0;
    let n = nums.length

    while(i < n) {
        let j = nums[i];
        if(nums[i] < n && nums[i] !== nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
        } else {
            i++
        }
    }
    for(i = 0; i < n; i++) {
        if(nums[i] !== i) {
            return i
        }
    }
    return n;
}


```
> **Time: O(n)**<br>
> **Space: O(1)**

### Find all Missing Numbers 

```
We are given an unsorted array containing numbers taken from the range 1 to ‘n’. The array can have duplicates, which means some numbers will be missing. Find all those missing numbers.
```
```
**Example 1:**
Input: [2, 3, 1, 8, 2, 3, 5, 1]
Output: 4, 6, 7
Explanation: The array should have all numbers from 1 to 8, due to duplicates 4, 6, and 7 are missing.

**Example 2:**
Input: [2, 4, 1, 2]
Output: 3

**Example 3:**
Input: [2, 3, 2, 1]
Output: 4
```
```js
function find_all_missing_nums(nums) {
    let missing_numbers = [];
    let n = nums.length + 1
    let i = 0;

    while(i < n) {
        let j = nums[i] - 1
        if(nums[i] < n && nums[i] !== nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
        } else {
            i++
        }
    }

    for(i = 0; i < n - 1; i++) {
        if(nums[i] - 1 !== i) {
            missing_numbers.push(i + 1)
        }
    }
    return  missing_numbers
}
```
> **Time: O(n)**<br>
> **Space: O(1)**

### Find the Duplicate Number
***We modify the input array***
```
We are given an unsorted array containing ‘n+1’ numbers taken from the range 1 to ‘n’. The array has only one duplicate but it can be repeated multiple times. Find that duplicate number without using any extra space. You are, however, allowed to modify the input array.
```
```
**Example 1:**
Input: [1, 4, 4, 3, 2]
Output: 4

**Example 2:**
Input: [2, 1, 3, 3, 5, 4]
Output: 3

**Example 3:**
Input: [2, 4, 1, 4, 4]
Output: 4
```
```js
function find_the_duplicate_number(nums) {
    let i = 0;
    while(i < nums.length) {
        if(nums[i] !== i + 1) {
            let j = nums[i] - 1
            if(nums[j] !== nums[i]) {
                [nums[i], nums[j]] = [nums[j], nums[i]]
            } else {
                return nums[i]
            }
        } else {
            i++
        }
    } 
    return -1
}

```
> **Time: O(n)**<br>
> **Space: O(1)**

### Find the Duplicate Number 
***We do not modify the input array***
```
 Can we solve the above problem in O(1)space and without modifying the input array?
```
```
**Example 1:**
Input: [1, 5, 2, 7, 4, 3, 2, 6]
Output: 2

**Example 2:**
Input: [1, 5, 3, 7, 4, 2, 3, 6]
Output: 3
```
```js
function find_duplicate(nums) {
    let slow = 0;
    let fast = 0;
    let round1 = true;
    let round2 = false;

    while(round1) {
        if(nums[slow] === nums[fast] && round2) {
            slow = 0;
            round1 = false;
        } else {
            slow = nums[slow];
            fast = nums[nums[fast]];
            round2 = true;
        }
    }

    while(round2) {
        if(nums[fast] === nums[slow]) return nums[slow];
        slow = nums[slow];
        fast = nums[fast];
    }
}
```

> **Time: O(n)**<br>
> **Space: O(1)**

### Find all Duplicate Numbers 
```
We are given an unsorted array containing n numbers taken from the range 1 to n. The array has some numbers appearing twice, find all these duplicate numbers using constant space.
```
```
**Example 1:**
Input: [3, 4, 4, 5, 5]
Output: [5, 4]

**Example 2:**
Input: [5, 4, 7, 2, 3, 5, 3]
Output: [3, 5]
```
```js
function find_all_duplicates(nums) {
    let  duplicate_numbers =  [];
    let i = 0;

    while(i < nums.length) {
       let j = nums[i] - 1;
       if(nums[i] !== nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]]
       } else {
        i++
       }
    }
    for(i = 0; i < nums.length; i++) {
        if(nums[i] !== i + 1) {
            duplicate_numbers.push(nums[i])
        }
    }
    return duplicate_numbers;
}
```
> **Time: O(n)**<br>
> **Space: O(1)**
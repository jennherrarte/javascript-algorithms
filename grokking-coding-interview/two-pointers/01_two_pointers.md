# Two Pointers

## Table of contents
1. [Pair with Target Sum (easy)](#Pair-with-Target-Sum)
2. [Separate Duplicates (easy)](#Separate-Duplicates)
3. [Squaring a Sorted Array (easy)](#Squaring-a-Sorted-Array)
4. [Triplet Sum to Zero (medium)](#Triplet-Sum-to-Zero)
5. [Triplet Sum Close to Target (medium)](#Triplet-Sum-Close-to-Target)
6. [Triplets with Smaller Sum (medium)](#Triplets-with-Smaller-Sum)
7. [Subarrays with Product Less than a Target (medium)](#Subarrays-with-Product-Less-than-a-Target)
8. [Dutch National Flag Problem (medium)](#Dutch-National-Flag-Problem)
9. [Problem 1 - Quadruple Sum to Target (medium)](#Problem-1-Quadruple-Sum-to-Target)
10.[Problem 2 - Comparing Strings containing Backspaces (medium)](#Problem-2-Comparing-Strings-containing-Backspaces)
11.[Problem 3 - Minimum Window Sort (medium)](#Problem-3-Minimum-Window-Sort)



### Pair with Target Sum 
```
Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.
```
```
**Example 1:**
Input: [1, 2, 3, 4, 6], target=6
Output: [1, 3]
Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6

**Example 2:**
Input: [2, 5, 9, 11], target=11
Output: [0, 2]
Explanation: The numbers at index 0 and 2 add up to 11: 2+9=11
```
```js
function pair_with_target_sum(arr, targetSum) {

 if(arr.length === 0 || arr.length === null) {
    return [-1, -1]
  }
  
  let left = 0,
  right = arr.length - 1;
  
  while (left < right) {
    const currentSum = arr[left] + arr[right];
    if (currentSum === targetSum) {
      return [left, right];
    }

    if (targetSum > currentSum) {
      left += 1; 
    } else {
      right -= 1; 
    }
  }
  return [-1, -1];
}
```
>**TC:O(N)**<br>
>**SC:O(1)**
### Remove Duplicates 
```
Given an array of sorted numbers, remove all duplicates from it. 
You should not use any extra space; after removing the duplicates 
in-place return the length of the subarray that has no duplicate in it.
```
```
**Exmaple 1:**
Input: [2, 3, 3, 3, 6, 9, 9]
Output: 4
Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].

**Example 2:**
Input: [2, 2, 2, 11]
Output: 2
Explanation: The first two elements after removing the duplicates will be [2, 11].
```
```js
function remove_duplicates(arr) {

  if(arr.length === 0 || arr.length === null) {
    return 0
  }
  
	let nextNonDupe = 1
	let i = 0
	
	while(i < arr.length) {
		if(arr[nextNonDupe - 1] !== arr[i]) {
			arr[nextNonDupe] = arr[i]
			nextNonDupe++
		}
		i++
	}
	return nextNonDupe
}

```
>**TC:O(N)**<br>
>**SC:O(1)**
### Squaring a Sorted Array 
```
Given a sorted array, create a new array containing squares 
of all the numbers of the input array in the sorted order.
```
```
**Example 1:**
Input: [-2, -1, 0, 2, 3]
Output: [0, 1, 4, 4, 9]

**Example 2:**
Input: [-3, -1, 0, 1, 2]
Output: [0, 1, 1, 4, 9]
```
``` js
function make_squares(arr) {
  let n = arr.length
	let squares = Array(n).fill(0)
	let right = n - 1
	let left = 0
	let highestSquareIdx = n - 1
	
	while(left < right) {
		let rightSquare = arr[right] * arr[right]
		let leftSquare = arr[left] * arr[left]
		
		if(rightSquare > leftSquare) {
			squares[highestSquareIdx] = rightSquare
			right--
		} else {
			squares[highestSquareIdx] = leftSquare
			left++
		}
		highestSquareIdx--
	}
	
	return squares

}
```
>**TC:O(N)**<br>
>**SC:O(N)**
### Triplet Sum to Zero 
```
Given an array of unsorted numbers, find all unique triplets in it that add up to zero.
```
```
**Example 1:**
Input: [-3, 0, 1, 2, -1, 1, -2]
Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
Explanation: There are four unique triplets whose sum is equal to zero.

**Example 2:**
Input: [-5, 2, -1, -2, 3]
Output: [[-5, 2, 3], [-2, -1, 3]]
Explanation: There are two unique triplets whose sum is equal to zero.
```
```js
function find_triplets(arr) {
	let triplets = [ ];
	arr.sort((a,b) => a - b)
	
	for(i = 0; i < arr.length; i++) {
		if(i > 0 && arr[i] === arr[i - 1]) {
			continue;
		}
		search_triplets(arr, -arr[i], i + 1, triplets)
	}
	return triplets
}

function search_triplets(arr, target_sum, left, triplets) {
let right = arr.length - 1
	while(left < right) {
	let current_sum = arr[left] + arr[right]
	
	if(targetSum === current_sum) {
		triplets.push([-target_sum, arr[right], arr[left]])
		right--
		left++
		
		while(left < right && arr[left] === arr[left - 1]) {
			left++
		}
		
		while(left < right && arr[right] === arr[right + 1]) {
			right--
		}
	
	} else if (target_sum > current_sum) {
		left++
	
	} else {
		right--
  }
 }
}
```
>**TC: Sorting the array will take O(N*log(N)). The searchPair() function will take O(N). As we are**
**calling searchPair() for every number in the input array, this means that overall searchTriplet() will take O(N * log(N) + N^2), which is asymptotically equivalent to O(N^2)** <br>

> **SC: Ignoring the sapce required for the output array, the sapce complexity of the above algorithm**
**will be O(N) which is required for sorting.**

### Triplet Sum Close to Target 
```
Given an array of unsorted numbers and a target number, 
find a triplet in the array whose sum is as close
to the target number as possible, return the sum of the triplet.
If there are more than one such triplet, 
return the sum of the triplet with the smallest sum.
```
```
**Example 1:**
Input: [-2, 0, 1, 2], target=2
Output: 1
Explanation: The triplet [-2, 1, 2] has the closest sum to the target.


**Example 2:**
Input: [-3, -1, 1, 2], target=1
Output: 0
Explanation: The triplet [-3, 1, 2] has the closest sum to the target.
```
```js
const triplet_sum_close_to_target = function(arr, target) {
   // sort nums so we can take a sliding window approach later for visiting triplets
    arr.sort((a,b)  => a-b)
    let closestSum = Infinity
    
    for(i = 0; i < arr.length - 2; i++) {
        let left = i + 1
        let right = arr.length - 1
        while(left < right) {
            let sum = arr[i] + arr[left] + arr[right]

            if(sum === target) {
                return sum
            }

            if(Math.abs(sum - target) < Math.abs(closestSum - target)) {
                closestSum = sum
            }

            if(sum > target) {
                right--
            } else {
                left++
            }
        }
    }
    
    return closestSum
};
```
>**TC: O(nlogn)**<br>
>**SC: O(N)**
### Triplets with Smaller Sum
```
Given an array arr of unsorted numbers and a target sum, 
count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, 
and k are three different indices. Write a function to return the count of such triplets.
```

```
**Example 1:**
Input: [-1, 0, 2, 3], target=3 
Output: 2
Explanation: There are two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2]

**Example 2:**
Input: [-1, 4, 2, 1, 3], target=5 
Output: 4
Explanation: There are four triplets whose sum is less than the target: 
   [-1, 1, 4], [-1, 1, 3], [-1, 1, 2], [-1, 2, 3]
```

```js
function triplet_with_smaller_sum (nums, target) {
	    nums.sort((a,b) => a - b);
    let count= 0;
  
    for (let i = 0; i < nums.length - 2; i++) {
      let left = i + 1;
      let right = nums.length - 1;
  
      while (left < right) {
        if (nums[i] + nums[left] + nums[right] < target) {
          count += right - left
          left++
        } else {
          right--
        }
      }
    }
    return count;
}

```
>**TC: O(n * logN * n) ---> O(n^2)** <br>
>**SC: O(n)**
### Subarrays with Product Less than a Target 
```
Given an array with positive numbers and a positive target number, find all of its contiguous 
subarrays whose product is less than the target number.
```
```
**Example 1:**
Input: [2, 5, 3, 10], target=30 
Output: [2], [5], [2, 5], [3], [5, 3], [10]
Explanation: There are six contiguous subarrays whose product is less than the target.

**Example 2:**
Input: [8, 2, 6, 5], target=50 
Output: [8], [2], [8, 2], [6], [2, 6], [5], [6, 5] 
Explanation: There are seven contiguous subarrays whose product is less than the target.
```
```js
function find_product_subarray (arr, target) {
   let result = [],
        product = 1,
        left = 0;
    
    for (right = 0; right < arr.length; right++) {
        product *= arr[right];
        
        while (product >= target && left < arr.length) {             
        	  product /= arr[left] 
            left += 1 
        }

        const tempList = [];  

        for (let i = right; i > left - 1; i--) {

            tempList.unshift(arr[i]);  

            result.push([...tempList]);  
          }
    }
    return result;
}

```
> **TC: O(N^3) since O(N) for sliding window, and worst O(n^2) create subarrays**<br>
> **SC: O(N^3) at most O(n^2) space for output list and each subarray can take O(n)**

### Dutch National Flag Problem
```
Given an array containing 0s, 1s and 2s, sort the array in-place.
You should treat numbers of the array as objects,
hence, we can’t count 0s, 1s, and 2s to recreate the array.
```
```
**Example 1:**
Input: [1, 0, 2, 1, 0]
Output: [0, 0, 1, 1, 2]

**Example 2:**
Input: [2, 2, 0, 1, 2, 0]
Output: [0, 0, 1, 2, 2, 2,]
```
```js
function dutch_flag_sort(arr) {
  // all elements < low are 0, and all elements > high are 2
  // all elements from >= low < i are 1
  let low = 0,
    high = arr.length - 1,
    i = 0;
  while (i <= high) {
    if (arr[i] === 0) {
      [arr[i], arr[low]] = [arr[low], arr[i]]; // swap
      // increment 'i' and 'low'
      i += 1;
      low += 1;
    } else if (arr[i] === 1) {
      i += 1;
    } else { // the case for arr[i] === 2
      [arr[i], arr[high]] = [arr[high], arr[i]]; // swap
      // decrement 'high' only, after the swap the number at index 'i' could be 0, 1, or 2
      high -= 1;
    }
  }
}
```
>**TC:O(N)**<br>
>**SC:O(1)**
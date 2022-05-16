### Pair with Target Sum (easy)
Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

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
### Remove Duplicates (easy)

Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the length of the subarray that has no duplicate in it.

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
### Squaring a Sorted Array 
Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.

``` js
function make_squares(arr) {
	let squares = Array(n).fill(0)
	let n = arr.length
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
### Triplet Sum to Zero 

Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

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
### Triplets with Smaller Sum

Given an array arr of unsorted numbers and a target sum, count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices. Write a function to return the count of such triplets.

```js
function triplet_with_smaller_sum (arr, target) {
	arr.sort((a,b) => a - b)
	let closestSum = Infinity
	
	for(i = 0; i < arr.length - 2; i++) {
	
		let left = i + 1
		let right = arr.length - 1
		
		while(left < right) {
		
			let sum = arr[i] + arr[left] + arr[right]
			
			if (sum === target) {
				return sum
			}
			
			if(Math.abs(sum - target) < Math.abs(closestSum - target)) {
				closestSum = target
			}
			
			if(sum > target) {
				right--
			} else {
				left++
			}
		
		}
	
	}

	return closestSum

}


```
### Subarrays with Product Less than a Target 

Given an array with positive numbers and a positive target number, find all of its contiguous subarrays whose product is less than the target number.

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
time: O(N^3) since O(N) for sliding window, and worst O(n^2) create subarrays
space: O(N^3) at most O(n^2) space for output list and each subarray can take O(n)

### Dutch National Flag Problem

Given an array containing 0s, 1s and 2s, sort the array in-place. You should treat numbers of the array as objects, hence, we can’t count 0s, 1s, and 2s to recreate the array.

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
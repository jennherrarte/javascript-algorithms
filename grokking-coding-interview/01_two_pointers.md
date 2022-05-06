### Pair with Target Sum (easy)
Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

```
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

```
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

``` 
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


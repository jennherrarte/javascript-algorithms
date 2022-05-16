# Sliding Window

## Table of contents
1. [Maximum Sum Subarray of Size K (easy)](#Maximum-Sum-Subarray-of-Size-K)
2. [Smallest Subarray with a given Sum (easy)](#Smallest-Subarray-with-a-Given-Sum)
3. [Longest Substring with K Distinct Characters (medium)](#Longest-Substring-with-K-Distinct-Characters)
4. [Fruits into Baskets (medium)](#Fruits-into-Baskets)
5. [No-repeat Substring (hard)](#No-Repeat-Substring)
6. [Longest Substring with Same Letters after Replacement (hard)](#Longest-Substring-with-Same-Letters-After-Replacement)
7. [Longest Subarray with Ones after Replacement](#Longest-Subarray-with-Ones-after-Replacement)
8. [Problem 1](#Problem-1)
9. [Problem 2](#Problem-2)
10. [Problem 3](#Problem-3)
11. [Problem 4](#Problem-4)


### Maximum Sum Subarray of Size K
```js
/** Given an array of positive numbers and a positive number ‘k,’ find the maximum sum
 * of any contiguous subarray of size ‘k’.
 *
 * Input: - an array of numbers
 *        - k is the set size for the subarrays we want to for the maximum sum
 * Output - is the maxSum of subarrays of size K
 *
 * Is sliding window pattern
 * we'll be look through windows of size k and matching it against the maxSum:
 * To do so we'll have
 * having a windowStart
 * and we'd keep track of the windowSum
 *
 * Then we loop through the array
 * And add the current element (windowEnd) to the windowSum
 * then we check if the current element we are in is >= to size k
 * x (If there are subarrays of size less than k ignore)
 * if it is > we add match windowSum to the maxSum,
 *  then we want to move on to the next element so we shrink the window,
 *  before doing so adjust the windowsum by taking out the sum of the first element in the window
 * Then return maxLength
 *
 * */

function max_sub_array_of_size_k(k, arr) { 
  if(arr.length === 0 || arr.length === null) {
    return 0
  }
    let maxSum = -Infinity;
    let windowStart = 0;
    let sum = 0;

    for(let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        sum += arr[windowEnd];

        if(windowEnd >= k - 1) {
            maxSum = Math.max(sum, maxSum);
            sum -= arr[windowStart];
            windowStart++
        }
    }
    return maxSum
}

```
### Smallest Subarray with a given Sum
```js
/** Given an array of positive numbers and a positive number ‘S,’ find the length of the
 * smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no
 * such subarray exists.
 * Input: array of positive numbers, S
 * Output: minLength ---> sum >= S
 *
 * Solution: Sliding Window Pattern
 *
 * minLength
 * windowSum
 *
 * cycle through the array
 * we'll look through the current window and see if it's greater, if it is, match against the minLength
 *      if it's not
 *  */

function smallest_subarray_with_given_sum(s, arr) {
  let windowSum = 0,
    minLength = Infinity,
    windowStart = 0;

  for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]; 
   while (windowSum >= s) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1); // this is 
      windowSum -= arr[windowStart];
      windowStart += 1;
    }
  }

  if (minLength === Infinity) { 
    return 0;
  }
  return minLength;
}

```
### Longest Substring with K Distinct Characters
```js
/** Given a string, find the length of the longest substring in it with no more than K distinct
 *  characters.
 * Input; string, k is the max # of distinct characters
 * Output: maxLength --> of the longset substring with no more than k distinct character
 *
 * Solution: Sliding Window Pattern
 *
 * maxLength
 * windowStart
 * charFrequency = {}
 *
 * look through (arr)
 *  then check match current element to the charFrequency
 *  - increase by 1
 *
 *  - loop ( if our charFrequency # of keys is < equal k )
 *  --- maxLength = (max Length or windowEnd - windowStart +1)
 *  windowStart++
 *
 * return maxLength
 * */


// 1st step: ascertain the the character on the right (windowEnd)
// If the window contains more than K distinct characters, we want to shrink the window to see if we can lower the distinct characters we find

function longest_substring_with_k_distinct(str, k) {
  let windowStart = 0,
    maxLength = 0,
    charFrequency = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (!(rightChar in charFrequency)) {
      charFrequency[rightChar] = 0;
    }
    charFrequency[rightChar] += 1;

    while (Object.keys(charFrequency).length > k) { 
      const leftChar = str[windowStart];
      charFrequency[leftChar] -= 1;
      if (charFrequency[leftChar] === 0) {
        delete charFrequency[leftChar];
      }
      windowStart += 1; 
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}

```

### Fruits into Baskets
```js
/** Given an array of characters where each character represents a fruit tree, you are
 *  given two baskets, and your goal is to put maximum number of fruits in each basket.
 * The only restriction is that each basket can have only one type of fruit.
 * ['A', 'B', 'C', 'D']
 *
 * INPUT: array of characters   (k is fixed = 2 distince fruits)
 * Output: maxFruits
 *
 * Solution - we'll apply a Sliding Window Pattern
 * maxFruits = 0
 * basket = {} <--- 2 fruits, 2 keys
 * windowstart
 *
 * ---- go through the fruits array
 * -- keep track of each fruit, match against basket
 * // check inside basket , make sure it doesn't exceed 2 fruits ( > k)
 * if so shrink
 *
 *  match against maxFruits, since each element of hte fruits array represents only one fruit that can be picked
 *  we can match it again windowEnd - windowStart
 * */

function fruits_in_a_basket(fruits) {

    let windowStart = 0;
    let fruitFreq = {};
    let maxLength = -Infinity 
    
    for(let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
        
        let rightChar = fruits[windowEnd]
        
        if(!(rightChar in fruitFreq)) {
            fruitFreq[rightChar] = 0;
        }
        fruitFreq[rightChar] += 1;
        
        while(Object.keys(fruitFreq).length > 2) {
            let leftChar = fruits[windowStart];
            fruitFreq[leftChar] -= 1

            if(fruitFreq[leftChar] === 0) {
                delete fruitFreq[leftChar]
            }
                windowStart++
        }
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
    }
    return maxLength
};

```

### No-repeat Substring
```js
/** Find length of the longest substring, which has no repeating characters.
 * Input: string
 * Output : LENGTH of the longest substring (unique characters)
 *
 * Solution: Sliding Window Pattern
 *
 * maxLength - of substring
 * charIndex  - {}
 * windowStart
 *
 * loop through the string
 *    check the current element we're one and add the index to the
 *
 *    if (charIndex[current Element]) {
 *
 *    windowStart = Math.max(windowStart, charIndex[currentElement]+1)
 *    }
 *     maxLength || windowEnd - windowStart
 *
 * bcaabdd
*/

function non_repeat_substring(str) {
    let  maxLength  = -Infinity,
         charIndexMap = {},
         windowStart  = 0;

    for(windowEnd = 0; windowEnd < str.length; windowEnd++) {
        let rightChar = str[windowEnd]

        if(rightChar in charIndexMap) {
            windowStart = Math.max(maxLength, charIndexMap[rightChar] + 1)
        }

        charIndexMap[rightChar] = windowEnd
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1)

    }
    return maxLength;   
 }

```

### Longest Substring with Same Letters after Replacement
```js
//06/05/21
/** Given a string with lowercase letters only, if you are allowed to replace
 * no more than ‘k’ letters with any letter, find the length of the longest
 * substring having the same letters after replacement.
 * aaaabaddaaa
 * Output: MaxLength after replacement of string of same letters
 * Input: string (lowercase) , only k letters can be replaced
 *
 * string="aabccbb", k=2  output: 5
 *
 * Solution: Sliding Window Pattern
 *
 * maxLength of string with same letters after replacement
 * charfrequency ---> {}
 * maxRepeatingLetter
 *
 * cycle through the string
 * start with the first element
 *      a add it to charFrequency
 *
 *      and then we compare match it against the maxRepeatingLetter
 *
 *     if(windowsize - maxRepeating letters > k )
 *      shrink the window
 *
 *     match maxLength
 *
 * return
 *
 *  */

var characterReplacement = function(str, k) {
    if(str.length === 0 || str.length === null) {
        return 0
    }
    
    let maxLength = -Infinity,
        charMap = {},
        windowStart = 0,
        maxRepeatLetter = 0
    
    for(let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        let rightChar = str[windowEnd];
        
        if(!(rightChar in charMap)) {
            charMap[rightChar] = 0;
        }
        
        charMap[rightChar] += 1
        maxRepeatLetter = Math.max(maxRepeatLetter, charMap[rightChar])
        
        if(windowEnd - windowStart + 1 - maxRepeatLetter > k) {
            
            let leftChar = str[windowStart];
            charMap[leftChar] -= 1
            windowStart++
        }
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
    }
    
    return maxLength;
};
```

### Longest Subarray with Ones after Replacement
```js
//06/07/21
/** Given an array containing 0s and 1s, if you are allowed to replace no more than
 *  ‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s.
 * Output: maxLength - of subarray having all 1s (after replacement)
 *  Input: array of 0s and 1s, k - max # of replacements
 *
 * Solution: Sliding Window Pattern
 *
 * maxLength, windowStart, maxRepeating1s
 *
 * // we want to replace 0s with 1s but can only do so k times.
 *
 * cycle through  array
     --- if there is a match with 1s add that up

     and then while( windowSize - maxRepeating1s < k) shrink the window
 *  */

const length_of_longest_substring = function(arr, k) {

  if(arr.length === 0 || arr.length === null) {
    return 0;
  }
  let windowStart = 0;
  let maxLength = -Infinity; 
  let maxOneCount = 0; 

    for(let windowEnd = 0; windowEnd < arr.length; windowEnd++) {

        if(arr[windowEnd] === 1) {
        maxOneCount++
        }

        if(windowEnd - windowStart + 1 - maxOneCount > k) {
            if (arr[windowStart] === 1) {
            maxOneCount -= 1;
            }
        windowStart++
        }

        maxLength = Math.max(windowEnd - windowStart + 1, maxLength)

    }
    return maxLength;
};
```

### Problem 1
```js
/** Given a string and a pattern, find out if the string contains any permutation
 * of the pattern.
 *
 * Input : String, and Pattern
 * Output: boolean - confirming whether it contains any permutation of the pattern
 *
 * Example : 'abcedef' , 'abc' true
 * Example : 'ascsbscs', 'abc', false
 * Example : 'abacsd', 'xyz', false
 *
 * Approach:
 *
 patternFrequency for Pattern
 * matches
 *
 * cycle through the array
 *  - check the current element, if there's a match with pattern,
 *         update the patternFrequency (if a letter matches, decrease value and
 *         update matchese if equals zero)
 *      if the matches equals the number of keys in our patternFrequency
 *         return true
 *      if no matches shrink the window
 *          first elemetn of the window and remove the value from patternFreq
 *           (increasing the value in this case)
 *
 *    return false
 *  */

function find_permutation(string, pattern) {
    let windowStart = 0;
    let match = 0;
    let charMap = {};
    
    for(i = 0; i < pattern.length; i++) {
        let char = pattern[i];
        if(!(char in charMap)) {
            charMap[char] = 0
        
        charMap[char] += 1;
    };
    
    for(let windowEnd = 0; windowEnd < string.length; windowEnd++) {
        let rightChar = string[windowEnd]
        
        if(rightChar in charMap) {
            charMap[rightChar] -= 1
            if(charMap[rightChar] === 0) {
                match += 1
            }
        };
           
        if(match === Object.keys(charMap).length) {
            return true
        }
        
        if(windowEnd >= pattern.length - 1) {
            let leftChar = string[windowStart];
            windowStart += 1;
            
            if(leftChar in charMap) {
                if(charMap[leftChar] === 0) {
                    match =- 1
                }
                charMap[leftChar] += 1
            }
        }
    }
    return false;

```

### Problem 2
```js
/** Given a string and a pattern, find all anagrams of the pattern in the given string.
 * Input: String and Pattern
 * Output: Starting indices of the anagrams in the string
 *
 * Approach:
 * result_indexes: []
 * matched = 0
 * patternFrequency - pattern
 *
 * cycle through the string
 *   - check the current letter we're on
 *   - if the letter match it against the pattern frequency
 *     update the pattern frequency
 *        - if at some point, we see that the particular frequency is 0
 *          - we'll add the indices to the result
 *
 *   - shrink
 *   - index windowEnd >= pattern.length -1
 *   -  update the pattern frequency , so that it takes out the first element the window
 *   -  increase the starting window
 *
 *
 *. return the indices
 *
 */

```
### Smallest Window containing Substring 
Given a string and a pattern, find the smallest substring in the given string which has all the character occurrences of the given pattern.

```js
function find_substring(str, pattern) {
	let windowStart = 0;
	let matched = 0;
	let charFreq = {};
	let substrStart = 0;
	let minLength = Infinity; 
	
	for(i = 0; i < pattern.length; i++) {
		let char = pattern[i];
		if(!(char in charFreq)) {
			charFreq[char] = 0;
		}
		charFreq[char] += 1
	}
	
	for(windowEnd = 0; windowEnd < str.length; windowEnd++) {
		let rightChar = str[windowEnd];
		
		if(rightChar in charFreq) {
			charFreq[rightChar] -= 1; 
			
			if(charFreq[rightChar] >= 0) { 
				matched++
			}
		}
		
		while(pattern.length === matched) {
			if(minLength > windowEnd - windowStart + 1) {
				minLength = windowEnd - windowStart + 1
				substrStart = windowStart 
			}
			
			let leftChar = str[windowStart] 
			windowStart++ 
			
			if(leftChar in charFreq) {
				if(charFreq[leftChar] === 0) {
					matched--
				}
				charFreq[leftChar] += 1
			}
		}
	}
	
	if(minLength > str.length) {
		return ''
	}
	
	return str.substring(substrStart, substrStart + minLength)
}

```

### Problem 4
```js

``` 
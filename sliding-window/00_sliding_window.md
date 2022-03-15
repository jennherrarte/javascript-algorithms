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


```

### Problem 2
```js
//2nd attempt
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

### Problem 3
```js

```

### Problem 4
```js

```
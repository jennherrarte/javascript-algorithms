// SECTION - Write a function that takes a string as input and checks whether it can be a valid palindrome by removing at most one character from it.

// NOTE - STEPS
// Initialize left and right pointer
// Initialize while loop with the condition while left is less than right
// if the characters at left and right do not match
// initialize skipL to slice off the letter at the front
// initialize skipR to slice off the letter at the back
// pass them into isPalindrome to check if new string is a palindrome, return TRUE or False
// otherwise, keep going until left is more than right, return TRUE

// NOTE - Test Case 'madame'

function validPalindrome(s) {
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    console.log(l, r);
    if (s[l] !== s[r]) {
      const skipL = s.slice(l + 1, r + 1);
      const skipR = s.slice(l, r);
      return isPalindrome(skipL) || isPalindrome(skipR);
    }
    l++;
    r--;
  }
  return true;
}

function isPalindrome(s) {
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    if (s[l] !== s[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
}

// NOTE - TC O(n)
// NOTE - SC O(1)


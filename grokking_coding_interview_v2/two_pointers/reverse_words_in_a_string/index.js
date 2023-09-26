// SECTION Given a sentence, reverse the order of its words without affecting the order of letters within a given word.

// ANCHOR - Example
// Input: "Hello World"
// Output: "World Hello"

// ANCHOR - Psuedocode
// 1. Reverse the entire string
// 2. Start iterating over the reversed string using two pointers, start and end initially set at index 0
// 3. While iterating over the string, when end points to a space, reverse the word pointer by start and end-1
// 4. Once the word has been reversed, update the start and end to the start index of the next word
// 5. Repeat the process until the entire string is iterated and return the string

// ANCHOR - Solution

function reverseWords(sentence) {
  // remove leading, trailing and multiple spaces
  sentence = sentence.trim().replace(/  +/g, ' ');
  // We need to convert the input strings
  // to lists of characters as strings are immutable in JavaScript
  sentence = [...sentence];
  let strLen = sentence.length;

  // We will first reverse the entire string.
  sentence = strRev(sentence, 0, strLen - 1);

  //  Now all the words are in the desired location, but
  //  in reverse order: "Hello World" -> "dlroW olleH".
  let start = 0,
      end = 0;

  // Now, let's iterate the reversed string and reverse each word in place.
  // "dlroW olleH" -> "World Hello"
  while (start < strLen) {

      // Find the end index of the word. 
      while (end < strLen && sentence[end] != " ") {
          end += 1;
      }
      // let's call our helper function to reverse the word in-place.
      strRev(sentence, start, end - 1);
      start = end + 1;
      end += 1;
  }
  return sentence.join("");
}

// a function that reverses a whole sentence character by character
function strRev(str, startRev, endRev) {
  // Starting from the two ends of the list, and moving
  // in towards the centre of the string, swap the characters
  while (startRev < endRev) {
      let temp = str[startRev]; // temp store for swapping
      str[startRev] = str[endRev]; // swap step 1
      str[endRev] = temp; // swap step 2

      startRev += 1; // move forwards towards the middle
      endRev -= 1; // move backwards towards the middle
  }
  return str;
}

// ANCHOR - Example Iterations 

// hello world 

// 0 1 2 3 4 5 6 7 8 9
// h e l l o w o r l d

// 1 
// startRev = 0
// endRev = 9
// temp = h 
// str[0] = h
// str[9] = d
// d e l l o w o r l h

// 2
// startRev = 1
// endRev = 8
// temp = e
// str[1] = e
// str[8] = l
// d l l l o w o r e h

// 3
// startRev = 2
// endRev = 7
// temp = l
// str[2] = r
// str[7] = l
// d l r l o w o l e h

// 4
// startRev = 3
// endRev = 6
// temp = l
// str[3] = o
// str[6] = l
// d l r o o w l l e h

// 5
// startRev = 4
// endRev = 5
// temp = w
// str[4] = o
// str[5] = w
// d l r o w o l l e h

// 6
// startRev = 5
// endRev = 4
// return str


// NOTE - TC
O(n+n)=O(n)

// NOTE - SC
O(n)
 
function length_of_longest_substring (arr, k) {

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

  module.exports = length_of_longest_substring;
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

  module.exports = max_sub_array_of_size_k;
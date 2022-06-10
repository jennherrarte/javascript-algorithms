function sort_array(arr) {
    let low = 0; 
    let high = arr.length - 1

   while(low < arr.length - 1 && arr[low] <= arr[low + 1]) {
       low++
   }

   if(low === arr.length - 1) {
       return 0
   }
  
  while(high > 0 && arr[high] >= arr[high - 1]) {
      high--
  }


  let subarrayMax = -Infinity;
  let subarrayMin = Infinity;

  for(k = low; k < high + 1; k++) {
    subarrayMax = Math.max(subarrayMax, arr[k])
    subarrayMin = Math.min(subarrayMin, arr[k])
  } 


  //checking to see if any nums are bigger than the smallest num 
  while(low > 0 && arr[low - 1] > subarrayMin ) {
    low--
  }

    //checking to see if any nums are smaller than the biggest num 
  while(high < arr.length - 1 && arr[high + 1] < subarrayMax) {
      high++ 
  }

  return high - low + 1
}

module.exports = sort_array 
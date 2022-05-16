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

 module.exports = triplet_sum_close_to_target;
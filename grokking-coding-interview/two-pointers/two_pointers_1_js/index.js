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

   module.exports = pair_with_target_sum;
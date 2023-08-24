function triplet_with_smaller_sum (nums, target) {
    nums.sort((a,b) => a - b);
let count= 0;

for (let i = 0; i < nums.length - 2; i++) {
  let left = i + 1;
  let right = nums.length - 1;

  while (left < right) {
    if (nums[i] + nums[left] + nums[right] < target) {
      count += right - left
      left++
    } else {
      right--
    }
  }
}
return count;
}

module.exports = triplet_with_smaller_sum
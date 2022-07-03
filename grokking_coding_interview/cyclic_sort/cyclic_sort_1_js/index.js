function cyclic_sort(nums) {
    let i = 0;
    while(i < nums.length) {
        let j = nums[i] - 1
        if(nums[i] !== nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
        } else {
            i++
        }
    }
    return nums
}

module.exports = cyclic_sort
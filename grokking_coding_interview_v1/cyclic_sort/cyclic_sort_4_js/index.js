function find_the_duplicate_number(nums) {
    let i = 0;
    while(i < nums.length) {
        if(nums[i] !== i + 1) {
            let j = nums[i] - 1
            if(nums[j] !== nums[i]) {
                [nums[i], nums[j]] = [nums[j], nums[i]]
            } else {
                return nums[i]
            }
        } else {
            i++
        }
    } 
    return -1
}

module.exports = find_the_duplicate_number;
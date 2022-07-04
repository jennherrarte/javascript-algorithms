function find_all_missing_nums(nums) {
    let missing_numbers = [];
    let n = nums.length + 1
    let i = 0;

    while(i < n) {
        let j = nums[i] - 1
        if(nums[i] < n && nums[i] !== nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
        } else {
            i++
        }
    }

    for(i = 0; i < n - 1; i++) {
        if(nums[i] - 1 !== i) {
            missing_numbers.push(i + 1)
        }
    }
    return  missing_numbers
}

module.exports = find_all_missing_nums;
function find_the_missing_number(nums) {
    let i = 0;
    let n = nums.length;

    while(i < n) {
        let j = nums[i];
        if(nums[i] < n && nums[i] !== nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
        } else {
            i++
        }
    }
    for(i = 0; i < n; i++) {
        if(nums[i] !== i) {
            return i
        }
    }
    return n;
}

module.exports = find_the_missing_number;
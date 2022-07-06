function find_duplicate(nums) {
    let slow = 0;
    let fast = 0;
    let round1 = true;
    let round2 = false;

    while(round1) {
        if(nums[slow] === nums[fast] && round2) {
            slow = 0;
            round1 = false;
        } else {
            slow = nums[slow];
            fast = nums[nums[fast]];
            round2 = true;
        }
    }

    while(round2) {
        if(nums[fast] === nums[slow]) return nums[slow];
        slow = nums[slow];
        fast = nums[fast];
    }
}

module.exports = find_duplicate;
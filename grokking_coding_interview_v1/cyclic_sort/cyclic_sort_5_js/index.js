function find_all_duplicates(nums) {
    let  duplicate_numbers =  [];
    let i = 0;

    while(i < nums.length) {
       let j = nums[i] - 1;
       if(nums[i] !== nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]]
       } else {
        i++
       }
    }
    for(i = 0; i < nums.length; i++) {
        if(nums[i] !== i + 1) {
            duplicate_numbers.push(nums[i])
        }
    }
    return duplicate_numbers;
}

module.exports = find_all_duplicates;
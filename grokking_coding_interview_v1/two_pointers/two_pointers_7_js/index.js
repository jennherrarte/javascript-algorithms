function find_product_subarray(arr, target) { 
    let result = [],
        product = 1,
        left = 0;

    for (right = 0; right < arr.length; right++) {
        product *= arr[right];

        while (product >= target && left < arr.length) {
            product /= arr[left]
            left += 1
        }

        const tempList = [];

        for (let i = right; i > left - 1; i--) {

            tempList.unshift(arr[i]);

            result.push([...tempList]);
        }
    }
    return result;
}

module.exports = find_product_subarray;
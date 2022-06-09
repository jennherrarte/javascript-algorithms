//[4, 1, 2, -1, 1, -3]

// -3, -1, 1, 1, 2, 4

// -3, -1, 1, 4 = 1 match

// -3, -1, 2, 4 = 2

// -3, 1, 1, 4 = 3 
// -3, 1, 1, 2 = 1 match 



function find_quadruplets(arr, targetNum) {
    arr.sort((a, b) => a - b)
    const quadruplets = [];

    for (let i = 0; i < arr.length - 3; i++) {
        if (i > 0 && arr[i] === arr[i - 1]) {
            continue
        }

        for (let j = i + 1; j < arr.length - 2; j++) {
            if (j > i + 1 && arr[j] === arr[j - 1]) {
                continue
            }
            search_pair(arr, i, j, targetNum, quadruplets)
        }
    }
    return quadruplets
}


function search_pair(arr, first, second, targetNum, quadruplets) {
    let left = second + 1
    let right = arr.length - 1

    while (left < right) {
        let sum = arr[first] + arr[second] +  arr[left] + arr[right] 
        if (sum === targetNum) {
            quadruplets.push([arr[first], arr[second], arr[left], arr[right]])
            right--
            left++

            while (left < right && arr[left] === arr[left - 1]) {
                left++
            }

            while (left < right && arr[right] === arr[right + 1]) {
                right--
            }
        } else if (targetNum > sum) {
            left++
        } else {
            right--
        }
    }
}

module.exports = find_quadruplets
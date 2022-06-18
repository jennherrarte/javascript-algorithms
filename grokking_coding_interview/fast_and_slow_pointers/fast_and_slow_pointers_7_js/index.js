function find_circular_array_cycle(arr) {
    for(i = 0; i < arr.length; i++) {
        let isForward = arr[i] >= 0 
        let slow = i
        let fast = i

        while(true) {
            slow = find_next_index(arr, isForward, slow)
            fast = find_next_index(arr, isForward, fast)

            if(fast !== -1) {
                fast = find_next_index(arr, isForward, fast)
            }

            if(slow === -1 || fast === -1 || slow === fast) {
                break
            }
        }

        if(slow !== -1 && slow === fast) {
            return true
        }
    }
    return false
}

function find_next_index(arr, isForward, currentIndex) {
    let direction = arr[currentIndex] >= 0

    if(direction !== isForward) {
        return -1
    }

    let nextIdx = (arr[currentIndex] + currentIndex) % arr.length

    if(nextIdx < 0) {
        nextIdx += arr.length 
    }

    if(nextIdx === currentIndex) {
        return -1
    }

    return nextIdx
}

// main cases we watch out for 
// if we change directions
// if cycle is one length 
// if nextIdx == currentIndex because we ended back where we just hopped from

module.exports = find_circular_array_cycle
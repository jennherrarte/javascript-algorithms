// check for cycle
// if cycle, grab length with helper function
// pass length to helper function to get starting code

// find cycle
// grab length 
// grab starting node


function find_cycle_start(head) { 
    let fast = head 
    let slow = head
    let cycleLength = 0
    let start = 0

    while(fast !== null && fast.next !== null) { 
        fast = fast.next.next
        slow = slow.next
        
        if(fast === slow) {
            cycleLength = find_cycle_length(slow)
            break // break while loop after returning value we need
        }
    }

    start = find_start(cycleLength, head)
    return start.value
}


function find_cycle_length(slow) {
    let count = 0
    let current = slow
    
    while(true) {
        current = current.next
        count++

        if(current === slow) {
            break
        }
    }
    return count
}

function find_start(cycleLength, head) {
    let pointer1 = head
    let pointer2 = head

    while(cycleLength > 0) {
        pointer2 = pointer2.next
        cycleLength-- 
    }

    while(pointer1 !== pointer2) {
        pointer1 = pointer1.next
        pointer2 = pointer2.next
    }

    return pointer1
}

module.exports = find_cycle_start
function find_cycle_length(head) {
    let slow = head
    let fast = head 

    while(fast !== null && fast.next !== null) {
        fast = fast.next.next
        slow = slow.next

        if(slow === fast) {
            return count_cycle(slow)
        }
    }

    return false
}

function count_cycle(slow) {
    let cycleLength = 0
    let current = slow 

    while(true) {
        current = current.next
        cycleLength += 1

        if(current === slow) {
            break
        }
    }

    return cycleLength 
}

module.exports = find_cycle_length


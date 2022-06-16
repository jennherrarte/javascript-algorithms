function reorder_linked_list(head) {
    if(head === null || head.next == null) {
        return 
    }

    let fast = head
    let slow = head

    while(fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
    }

    let secondHalfHead = reverse(slow)
    let firstHalfHead = head

    while(secondHalfHead !== null && firstHalfHead !== null) {
        let temp = firstHalfHead.next
        firstHalfHead.next = secondHalfHead
        firstHalfHead = temp 

        temp = secondHalfHead.next 
        secondHalfHead.next = firstHalfHead
        secondHalfHead = temp
    }

    if(firstHalfHead !== null) {
        firstHalfHead.next = null
    }
}

function reverse(current) {
    let prev = null

    while(current !== null) {
        let next = current.next
        current.next = prev
        prev = current 
        current = next 
    }

    return prev
}

module.exports = reorder_linked_list
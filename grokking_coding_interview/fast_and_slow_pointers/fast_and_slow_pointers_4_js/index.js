function find_middle_node(head) {
    let slow = head
    let fast = head 

    while(fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
    }

    return slow.value
}

module.exports = find_middle_node
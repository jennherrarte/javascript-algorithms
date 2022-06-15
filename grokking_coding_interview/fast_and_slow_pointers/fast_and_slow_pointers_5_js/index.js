function is_palindrome(head) {

    if(head === null || head.next === null) {
        return true
    }

    let slow = head
    let fast = head

    while(fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
    }

    let reversedHead = reverse(slow)
    let reversedHeadCopy = reversedHead

    while(head !== null && reversedHead !== null) {

        if(head.value !== reversedHead.value) {
            break
        }

        head = head.next
        reversedHead = reversedHead.next
    }

    reverse(reversedHeadCopy)

    if(head === null || reversedHead === null) { // why is it an OR instead of both
        return true
    }

    return false
}

function reverse(current) {
    let prev = null

    while(current  !== null) {
        next = current.next
        current.next = prev
        prev = current
        current = next
    }

    return prev
}

module.exports = is_palindrome
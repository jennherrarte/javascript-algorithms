function reverse_list() {
    let current = head;
    let previous = null;

    while(current !== null) {
        let next = current.next;
        current.next = previous;
        current = next;
        previous = current;
    }
    return previous
}

module.exports = reverse_list;
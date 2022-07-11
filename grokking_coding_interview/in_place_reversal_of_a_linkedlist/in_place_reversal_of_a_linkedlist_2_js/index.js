function reverse_sub_list(head, p, q) {
    if(p === q) {
        return head;
    }

    let current = head;
    let previous = null;
    let i = 0;

    while (current !== null && i < p - 1) {
        previous = current 
        current = current.next
        i++
    }

    let last_node_of_the_first_part = previous;
    let last_node_of_the_sub_list = current;
    let next = null;
    i = 0;

    while(current !==  null && i < q - p + 1) {
        next = current.next;
        current.next = previous;
        previous = current; 
        current = next;
        i++
    }

    if(last_node_of_the_first_part !== null) {
        last_node_of_the_first_part.next = previous;
    } else {
        head = previous;
    }

    last_node_of_the_sub_list.next = current;
    return head;
}

module.exports = reverse_sub_list;
const find_middle_node = require('./index')

test('works', () => {

    class Node {
        constructor(value, next = null) {
            this.value = value
            this.next = next
        }
    }

    const head = new Node(1)
    head.next = new Node(2) 
    head.next.next = new Node(3)
    head.next.next.next = new Node(4)
    head.next.next.next.next = new Node(5)
    head.next.next.next.next.next = new Node(6)
    
    expect(find_middle_node(head)).toEqual(4)
})

test('works', () => {

    class Node {
        constructor(value, next = null) {
            this.value = value
            this.next = next
        }
    }

    const head = new Node(1)
    head.next = new Node(2) 
    head.next.next = new Node(3)
    head.next.next.next = new Node(4)
    head.next.next.next.next = new Node(5)
    head.next.next.next.next = new Node(6)
    head.next.next.next.next.next = new Node(7)
    
    expect(find_middle_node(head)).toEqual(4)
})

test('works', () => {

    class Node {
        constructor(value, next = null) {
            this.value = value
            this.next = next
        }
    }

    const head = new Node(1)
    head.next = new Node(2) 
    head.next.next = new Node(3)
    head.next.next.next = new Node(4)
    head.next.next.next.next = new Node(5)
    
    expect(find_middle_node(head)).toEqual(3)
})
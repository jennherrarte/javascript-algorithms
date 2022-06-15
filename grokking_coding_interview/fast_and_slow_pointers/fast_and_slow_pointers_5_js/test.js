const is_palindrome = require('./index')


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
    head.next.next.next.next = new Node(3)
    head.next.next.next.next.next = new Node(2)
    head.next.next.next.next.next.next = new Node(1)
    
    expect(is_palindrome(head)).toEqual(true)
})

test('works', () => {

    class Node {
        constructor(value, next = null) {
            this.value = value
            this.next = next
        }
    }

    const head = new Node(1)

    expect(is_palindrome(head)).toEqual(true)
})




test('works', () => {

    class Node {
        constructor(value, next = null) {
            this.value = value
            this.next = next
        }
    }

    const head = new Node(-1)
    head.next = new Node(5) 
    head.next.next = new Node(2)
    head.next.next.next = new Node(4)
    head.next.next.next.next = new Node(2)
    head.next.next.next.next.next = new Node(5)
    head.next.next.next.next.next.next = new Node(-1)
    
    expect(is_palindrome(head)).toEqual(true)
})


test('works', () => {

    class Node {
        constructor(value, next = null) {
            this.value = value
            this.next = next
        }
    }

    const head = new Node(-1)
    head.next = new Node(5) 
    head.next.next = new Node(2)

    expect(is_palindrome(head)).toEqual(false)
})
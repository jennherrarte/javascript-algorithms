const hasCycle = require('./index');

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

    head.next.next.next.next.next.next = head.next.next
	expect(hasCycle(head)).toEqual(true);
});


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
    
	expect(hasCycle(head)).toEqual(false);
});

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
    head.next.next.next.next.next.next = head.next
    
	expect(hasCycle(head)).toEqual(true);
});

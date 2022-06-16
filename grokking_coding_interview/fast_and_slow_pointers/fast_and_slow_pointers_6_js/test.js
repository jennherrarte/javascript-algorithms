// need to re-do test suite
// printing values not working
// solution is correct

const reorder_linked_list = require('./index')

test('works', () => {

    class Node {
        constructor(value, next = null) {
          this.value = value;
          this.next = next;
        }
      
      
        print_list() {
          temp = this;
          while (temp !== null) {
            process.stdout.write(`${temp.value} `);
            temp = temp.next;
          }
          console.log();
        }
      }

    

    const head = new Node(2);
    head.next = new Node(4);
    head.next.next = new Node(6);
    head.next.next.next = new Node(8);
    head.next.next.next.next = new Node(10);
    head.next.next.next.next.next = new Node(12);
    

    expect(reorder_linked_list(head)).toEqual(head.print_list())
})

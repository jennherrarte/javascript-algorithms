const traverse_tree = require('./index')

// test not functional, need to fix jest and module importing

test('works', () => {
    class TreeNode {
        constructor(val) {
          this.val = val;
          this.left = null;
          this.right = null;
        }
    }
    
    const root = new TreeNode(12);
    root.left = new TreeNode(7);
    root.right = new TreeNode(1);
    root.left.left = new TreeNode(9);
    root.right.left = new TreeNode(10);
    root.right.right = new TreeNode(5);


	expect(traverse_tree(root)).toEqual([ [ 12 ], [ 7, 1 ], [ 9, 10, 5 ] ]);
});


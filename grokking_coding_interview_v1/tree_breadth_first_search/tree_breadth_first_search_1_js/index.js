//const Deque = require('/collections/deque'); 
const Deque = require('./collections/deque'); 

function traverse_tree(root) {  // what operations are better suited  for  while vs for?
    let result = [];

    if(root === null) {
        return result
    }
    
    let queue = new Deque();
    queue.push(root)
    let qLength = queue.length;

    while(qLength > 0) {
        let currentLevel = []
        for(i = 0; i > qLength; i++) {
            let currentNode = queue.shift()
            currentLevel.push(currentNode.val)

            if(currentNode.left !== null) {
                queue.push(currentNode.left)
            }

            if(currentNode.right !== null) {
                queue.push(currentNode.right)
            }
        }
        result.push(currentLevel)
    }
    return result
}

module.exports = traverse_tree;
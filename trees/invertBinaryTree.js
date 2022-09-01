var invertTree = function(root) {
    if(root === null) return null
    
    let stack = []
    stack.push(root)
    while(stack.length !== 0){
        const current = stack.pop()
        let temp = current.left
        current.left = current.right
        current.right = temp
        if(current.left !== null) {
            stack.push(current.left)
        if(current.right !== null) {
            stack.push(current.right)
        }
        }
    }
    return root
};

var invertTreeRecursive = (root) => {
    if(root === null) return null
    let temp = root.left
    root.left = root.right
    root.right = temp

    invertTreeRecursive(root.left)
    invertTreeRecursive(root.right)

    return root
}
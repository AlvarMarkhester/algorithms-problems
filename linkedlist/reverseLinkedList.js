function reverse(llist) {
    var current = llist
    var prevnode = null;
    var nextnode;
    while(current.next) {
        nextnode = current.next
        current.next = prevnode
        prevnode = current
        
        current = nextnode
    }
    current.next = prevnode
    return current
}
function deleteNode(llist, position) {
    let current = llist
    if(position === 0) {
        if(llist.next === undefined) {
            return null
        }
        return llist.next
    }
    
    for(let i=0; i<=position-1; i++) {
        if(i === position-1) {
            current.next = current.next.next
        }
        current = current.next
    }
    
    return llist

}
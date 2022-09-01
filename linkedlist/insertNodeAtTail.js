function insertNodeAtTail(head, data) {
    if(head === null) {
        head = {
            data: data
        }
        return head
    }
    let current = head;
    for(let i = 0; current.next; i++) {
        current = current.next
    }
    current.next = {
        data: data
    }
    return head
}
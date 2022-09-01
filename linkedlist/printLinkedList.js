function printLinkedList(head) {
    if(head === null) return
    console.log(head.val)
    printLinkedList(head.next)
}

function printLinkedList2(head) {
    while(head !== null) {
        console.log(head.data)
        head = head.next
    }
}

printLinkedList(head)
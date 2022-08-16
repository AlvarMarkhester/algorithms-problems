function insertNodeAtPosition(llist, data, position) {
    if (position === 0) {
        return { data: data };
    }

    let current = llist;
    let prevNode;

    for (let i = 1; i <= position; i++) {
        current = current.next;
        if (i === position - 1) {
            prevNode = current;
        }
        if (i === position) {
            prevNode.next = {
                data: data,
                next: prevNode.next,
            };
            return llist;
        }
    }
}

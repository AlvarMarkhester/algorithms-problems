function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)     
    this.next = (next===undefined ? null : next)
 }

var mergeTwoLists = function(list1, list2) {
    
    current = null
    tmp = null
    
    
    while(list1 !== null || list2 !== null) {
        
        if(list1 !== null && (list2 === null || list1.val < list2.val)){
            if(current === null){
                current = new ListNode(list1.val)
                tmp = current
            }
            else {
                tmp.next = new ListNode(list1.val)
                tmp = tmp.next
            }
            list1 = list1.next
        }
        else {
            if(current === null) {
                current = new ListNode(list2.val)
                tmp = current
            }
            else {
                tmp.next = new ListNode(list2.val)
                tmp = tmp.next
            }
            list2 = list2.next
        }
    }
    return current
};
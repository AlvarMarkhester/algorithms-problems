var addTwoNumbers = function(l1, l2) {
    let listNode = function ListNode(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    } 
    let carry = 0;
    
    while(l1 !== null || l2 !== null || carry > 0) {
        
        let sum = 0;
        
        if(l1 !== null){
            sum += l1.val
        }
        if(l2 !== null) {
            sum += l2.val
        }
        sum += carry
        
        if(sum >= 10) {
            carry = sum % 10;
            sum = Math.floor(sum / 10);
        }
        
        listNode.val = sum
        
        l1 = l1.next
        l2 = l2.next
        listNode.next = new listNode()
    }
    
    return listNode
    
};
//O(n) space O(n)
var isPalindrome = function(head) {
    const arrayOfNums = []
    
    while(head !== null){
        arrayOfNums.push(head.val)
        head = head.next
    }
    
    let end = arrayOfNums.length-1
    let start = 0
    while(start < end){
        if(arrayOfNums[start] !== arrayOfNums[end]) return false
        start++
        end--
    }
    return true
    
};

//Slower cause of string manipulation but space: O(1)
var isPalindrome = function(head) {
    let normal = ""
    let reversed = ""
    
    while(head !== null){
        normal = normal + head.val
        reversed = head.val + reversed
        head = head.next
    }
    
    if(normal === reversed) return true
    return false
};




function ListNode(val, next){
    this.val = (val !== undefined) ? val : 0;
    this.next = (next !== undefined) ? next : null;
}

var isPalindrome = function(head) {
    let normalHead = head
    let reversedHead = reverseNode(head)
    while(normalHead !== null) {
        if(normalHead.val !== reversedHead.val) return false
        normalHead = normalHead.next
        reversedHead = reversedHead.next
    }
    return true
}

function reverseNode(head) {
    prev = null
    pointer = head
    while(pointer) {
        copy = new ListNode(pointer.val, prev)
        prev = copy
        pointer = pointer.next
    }
    return prev
}
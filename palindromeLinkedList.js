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
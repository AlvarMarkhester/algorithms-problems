var isPalindrome = function(s) {
    let start = 0
    let end = s.length-1
    s = s.toLowerCase()
    
    while(start < end){
        while(!s[start].match(/[a-z]/)) start++
        while(!s[end].match(/[a-z]/)) end--
        
        if(s[start] !== s[end]) return false
        start++
        end--
    }
    return true
};

let s = "ra!ce a ca!r"
s = s.replace(/[\W_]/g, '')

console.log(s)

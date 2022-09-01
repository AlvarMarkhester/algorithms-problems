const s = "abc"
const t = "ahbgdc"
var isSubsequence = function(s, t) {
    
    let count = 0
    
    for(let i = 0; i < t.length; i++) {
        if(t[i] === s[count] && count <= t.length) {
            count++
        }
    }
    
    return count === s.length ? true : false
    
    
};

console.log(isSubsequence(s, t))
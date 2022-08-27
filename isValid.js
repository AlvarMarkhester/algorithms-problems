var isValid = function(s) {
    const openSet = {
        "(": 0,
        "[": 1,
        "{": 2
        
    }
    let count = 0
    const closedSet = {
    ")": 0, 
    "]": 1,
    "}": 2
    }
    const stack = []
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] in openSet) {
            stack.push(s[i])
            count++
        }
        if(s[i] in closedSet){
            let temp = stack.pop()
            if(openSet[temp] !== closedSet[s[i]]) return false
            count--
        }
    }
    return count === 0 ? true : false
};
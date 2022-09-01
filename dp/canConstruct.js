var canConstruct = function(ransomNote, magazine) {
    const map = {}
    
    for(let i = 0; i < ransomNote.length; i++){
        if(map[ransomNote[i]]) map[ransomNote[i]]++
        else map[ransomNote[i]] = 1
    }
    
    for(let i = 0; i < magazine.length; i++){
        if(map[magazine[i]]) map[magazine[i]]--
    }
    
    for(value in map){
        if(map[value] > 0) return false
    }
    return true
    
};

var canConstructRecursive = function(ransomNote, magazine) {
    if(ransomNote.length === 0) return true
    if(magazine.length === 0) return false

    const firstChar = magazine[0]
    const restChars = magazine.slice(1)
    const indexOf = ransomNote.indexOf(firstChar)

    if(indexOf >= 0) ransomNote = ransomNote.slice(0, indexOf) + ransomNote.slice(indexOf+1)

    return canConstructRecursive(ransomNote, restChars)

}

//98.78% speed
var canConstructFast = function(ransomNote, magazine) {
    if(ransomNote.length > magazine.length) return false
    
    for(char of ransomNote) {
        if(magazine.indexOf(char) >= 0) {
            magazine = magazine.replace(char, "")
        }
        else {
            return false
        }
    }

    return true
}

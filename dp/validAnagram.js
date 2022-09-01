// Given two strings s and t, return true if t is an anagram of s, and false otherwise.


const isAnagram = function(s, t) {
    var map = {}
    
    if (s.length !== t.length) return false
    
    for (i in s) {
        if (map[s[i]]){
            map[s[i]]++
        }
        else {
            map[s[i]] = 1
        }
    }
    
    for (i in t) {
        if (map[t[i]]) {
            map[t[i]]--
        }
        else {
            return false;
        }
    }
    return true
    
};
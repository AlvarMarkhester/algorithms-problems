const s = "abcabcbb"

var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let chars = new Set()
    let l = 0
    for(var r = 0; r < s.length; r++) {
        while(chars.has(s[r])) {
            chars.delete(s[l])
            l++
        }
        chars.add(s[r])
        max = Math.max(max, r-l+1)
    }
    return max;
};



console.log(lengthOfLongestSubstring(s))
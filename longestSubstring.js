const s = "abcabcbb"


//failed approach
var lengthOfLongestSubstring = function(s) {
    let longestSubstring = Number.MIN_VALUE;
    let map = {}
    let start = 0
    for(var end = 0; end < s.length; end++) {
        if(map[s[end]]) {
            if(longestSubstring < end - start) {
                longestSubstring = end - start
            }
            start = end
            for (let key in map) delete map[key];
        }

        map[s[end]] = end
        console.log(map)
    }
    longestSubstring = Math.max(longestSubstring, start-end)
    return longestSubstring;
};

console.log(lengthOfLongestSubstring(s))
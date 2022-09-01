const s = "ADOBECODEABC";
const t = "ABC";

var minWindow = function (s, t) {
    const char = {}
    let minLength = Number.MAX_VALUE;
    let minStartIndex = 0;
    let charCount = t.length;

    for(let i = 0; i < t.length; i++){
        char[t[i]] = (char[t[i]] || 0) + 1
    }

    for(let l = 0, r = 0;  r < s.length;){
        if(char[s[r]] > 0) charCount--;
        char[s[r]]--;
        r++;

        while(charCount === 0){
            if((r - l) < minLength){
                minLength = r-l
                minStartIndex = l
            }
            char[s[l]]++;
            if(char[s[l]] > 0) charCount++;
            l++;
        }
    }
    return (minLength === Number.MAX_VALUE ? "" : s.substr(minStartIndex, minLength))
};

console.log(minWindow(s, t))
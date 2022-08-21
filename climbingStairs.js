
//Recursive with memo, abit slower
var climbStairsMemo = function(n, memo = {}) {
    if(n in memo) return memo[n]
    if(n < 0) return 0
    if(n === 0) return 1
    
    memo[n] = climbStairs(n-1, memo) + climbStairs(n-2, memo)
    return  memo[n]
    
};

//Tabulation, abit faster
var climbStairsTab = function(n) {
    const array = Array(n+1).fill(0)

    array[1] = 1
    array[2] = 1
    for(let i = 1; i <= n; i++) {
        if(array[i] > 0) {
            array[i+1] += array[i]
            array[i+2] += array[i]
        }
    }
    return array[n]
};

console.log(climbStairs(2))
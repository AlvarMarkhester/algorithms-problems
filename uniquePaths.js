//Tabulation
var uniquePaths = function(m, n) {
    const map = []
    for(let i = 0; i <= m; i++) {
        map.push(Array(n+1).fill(0))
    }
    map[1][1] = 1
    for(let row = 1; row <= m; row++) {
        for(let col = 1; col <= n; col++) {
            map[row][col] += map[row-1][col] + map[row][col-1]
        }
    }
    
    return map[m][n]
    
};
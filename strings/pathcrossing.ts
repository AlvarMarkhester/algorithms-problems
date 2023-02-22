function isPathCrossing(path: string): boolean {
    let map = {}
    let x = 0
    let y = 0
    for(let s of path) {
        map[x + "," + y] = 1
        if(s === "N")
            y++
        if(s === "S")
            y--
        if(s === "E")
            x--
        if(s === "W")
            x++
        if(map[x + "," + y]) return true
    }
    return false
};

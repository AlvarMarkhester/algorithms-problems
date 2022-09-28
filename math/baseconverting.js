let n = 847387
let b = 2
let T = "0123456789ABCDEF"
let R = ""

while(n) {
    const kvot = Math.floor(n/b);
    const rest = n % b;
    R = T[rest] + R
    n = kvot
}
console.log(R)
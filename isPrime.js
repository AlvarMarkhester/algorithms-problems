//Brute force, O(n^2)
function isPrime1(num) {
    if (num <= 1) return false
    for (i = 2; i < num; i++){
        for (k = 2; k < num; k++){
            if (i*k === num) return false
        }
    }
    return true
}
// O(n)
function isPrime2(num) {
    if (num <= 1) return false
    for (i = 2; i < num; i++) {
        if(num%i === 0) return false
    }
    return true
}
//Optimized O(n)
function isPrime3(num) {
    if (num <= 1) return false
    for (i = 2; i <= Math.sqrt(num); i++) {
        if(num%i === 0) return false
    }
    return true
}
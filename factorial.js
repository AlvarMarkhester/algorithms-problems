function factorial(num) {
    let factorial = 1
    for (i = 1; i <= num; i++) {
        factorial = factorial*i
    }
    return factorial;
}

console.log(factorial(5))
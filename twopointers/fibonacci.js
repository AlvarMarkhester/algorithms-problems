const fibonacci = (num) => {
    let fibArray = [0, 1]
    for (i = 2; i < num; i++) {
        fibArray[i] = fibArray[i-2] + fibArray[i-1]
    }
    return fibArray;
}
console.log(fibonacci(7))

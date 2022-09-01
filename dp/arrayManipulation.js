const n = 5;
const queries = [
    [1, 2, 100],
    [2, 5, 100],
    [3, 4, 100],
];
function arrayManipulation(n, queries) {
    // Write your code here
    const array = Array(n+1).fill(0);
    let largestInt = 0;
    for (let query of queries) {
        let startIndex = query[0];
        let endIndex = query[1];
        let numToAdd = query[2];
        array[startIndex] += numToAdd;
        if (endIndex < array.length) array[endIndex+1] -= numToAdd;
    }
    for (let i = 1; i <= n; i++) {
        array[i] += array[i - 1];
        if(array[i] > largestInt) largestInt=array[i]
    }
    return largestInt;
}

console.log(arrayManipulation(n, queries));

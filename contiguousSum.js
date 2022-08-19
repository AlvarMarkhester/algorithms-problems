const array = [5,9,1,10,5,4,1,3,2]

//Find the contiguous sum of 3
//Sliding window O(n)

//Hard coded window size
function contiguousSum(arr) {
    let maxSum = -Infinity

    for(let i = 0; i+2<arr.length; i++) {
        let currentSum = arr[i] + arr[i+1] + arr[i+2];
        if(currentSum > maxSum) {
            maxSum = currentSum
        }
    }
    return maxSum;
}

function contiguousSumK(arr, k) {
    let maxSum = -Infinity;
    let currentSum = 0;

    for(let i = 0; i<arr.length; i++) {
        currentSum += arr[i]
        if(i >= (k-1)) {
            if(currentSum > maxSum) {
                maxSum = currentSum
            }
            currentSum -= arr[i - (k-1)]
        }
    }
    return maxSum
}

console.log(contiguousSum(array))
console.log(contiguousSumK(array, 6))

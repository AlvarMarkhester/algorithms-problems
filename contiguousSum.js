const array = [5,9,1,10,5,4,1,3,2]

//Find the contiguous sum of 3
//Sliding window O(n)


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

console.log(contiguousSum(array))
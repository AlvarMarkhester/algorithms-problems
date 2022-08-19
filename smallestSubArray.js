const array = [0,0,0,0,0,0,0,0,1]

const sum = 1;

function smallestSubArray(array, targetSum) {
    let minWindowSize = Infinity;
    let currentWindowSum = 0;
    let windowStart = 0;

    for(let windowEnd = 0; windowEnd < array.length; windowEnd++) {
        currentWindowSum += array[windowEnd]
        while(currentWindowSum >= targetSum) {
            minWindowSize = Math.min(minWindowSize, (windowEnd - windowStart + 1))
            if(minWindowSize === 1) {
                return minWindowSize;
            }
            currentWindowSum -= array[windowStart]
            windowStart++
        }
    }
    return minWindowSize;
}

console.log(smallestSubArray(array, sum))
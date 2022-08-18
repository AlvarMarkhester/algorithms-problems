//Iterative O(n^2)
function cutTheSticks(arr) {
    const answer = [];
    while(arr.length > 0) {
        let lowest;
        answer.push(arr.length);
        
        for(let i in arr) {
            if(arr[i] < lowest || lowest === undefined) {
                lowest = arr[i];
            }
        }
        arr = arr.filter((value) => value !== lowest)
    }
    return answer;
}

//Recursive O(n^2)
//Requires sorted array
const arr = [] = arr.sort()
function CutTheSticks1(arr) {
    if(!arr.length) return
    console.log(arr.length)
    CutTheSticks1(arr.map(value => value - arr[0]).filter(value => value > 0))
}



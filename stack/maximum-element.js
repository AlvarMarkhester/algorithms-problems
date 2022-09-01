const sampleOperations = ["1 62", "2", "1 20", "1 26", "3"]

function getMax(operations) {
    // Write your code here
    const stack = []
    const answer = []
    for(let query of operations) {
        if(query.length > 1) {
            let element = query.split(" ")
            let intToAdd = parseInt(element[1])
            stack.push(intToAdd)
        }
        if(query === "2") {
            stack.pop()
        }
        if(query ===  "3") {
            answer.push(Math.max(...stack))
        }
    }
    return answer;
}

console.log(getMax(sampleOperations))
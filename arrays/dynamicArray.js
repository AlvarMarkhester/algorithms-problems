var queries = [[ 1, 0, 5 ], [ 1, 1, 7 ], [ 1, 0, 3 ], [ 2, 1, 0 ], [ 2, 1, 1 ]]

function dynamicArray(n, queries) {
    const arr = [];
    const answerArr = []
    var lastAnswer = 0;
    
    
    for (let i = 0; i < n; i++) {
        arr[i] = []
    }
    for(let i = 0; i <queries.length; i++){
        if(queries[i][0] === 1) {
            let idx = ((queries[i][1]^lastAnswer)%n)
            arr[idx].push(queries[i][2])
        }
        if(queries[i][0] === 2) {
            let idx = ((queries[i][1]^lastAnswer)%n)
            lastAnswer = arr[idx][queries[i][2] % arr[idx].length]
            answerArr.push(lastAnswer)
        }
    }
    return answerArr

}

console.log(dynamicArray(2, queries))
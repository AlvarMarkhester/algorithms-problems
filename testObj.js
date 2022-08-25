
const search = "a"
const string = "abc"

const index = string.indexOf(search[0])

const sliced = string.slice(0, index) + string.slice(index+1)

console.log(sliced)
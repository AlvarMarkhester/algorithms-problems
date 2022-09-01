const composeTransducers = (transducerOne, transducerTwo) => reducingFn => transducerOne(transducerTwo(reducingFn))

const concat = (acc, val) => acc.concat(val)

const makeTransducer = transformFn => reducingFn => (acc, val) => reducingFn(acc, transformFn(val))

const addOneTransducer = makeTransducer(val => val + 1)
const timesTwoTransducer = makeTransducer(val => val * 2)

const addOneAndDoubleTransducer = composeTransducers(addOneTransducer, timesTwoTransducer)

const reducingFn = addOneAndDoubleTransducer(concat)

console.log([1,2,3,4].reduce(reducingFn, []))
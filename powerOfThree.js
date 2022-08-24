var isPowerOfThree = function(n) {
    return n === Math.pow(3, parseInt((Math.log(n) / Math.log(3))))
};
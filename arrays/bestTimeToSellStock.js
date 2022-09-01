
// O(n) space: O(1)
var maxProfit = function(prices) {
    
    let profit = 0;
    let min = Number.MAX_VALUE;
    
    for(let i = 0; i < prices.length; i++) {
        if(prices[i] < min){
            min = prices[i]
        }
        if(prices[i] - min > profit){
            profit = prices[i]-min
        }
    }
    return profit
};
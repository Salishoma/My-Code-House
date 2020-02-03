/*
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

LeetCode: 121. Best Time to Buy and Sell Stock
*/

var maxProfit = function(prices) {
    if(prices.length === 0) return 0;
    let profit = 0; let sale = prices[0]; let min = Infinity
    let j = 1;
    for(let i = 0; i < prices.length; i++){
        if(min > prices[i]) min = prices[i];
        else if(profit < prices[i] - min) profit  = prices[i] - min
    }
    return profit;
};
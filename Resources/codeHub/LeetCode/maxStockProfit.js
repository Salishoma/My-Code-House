/*
Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

LeetCode: 122. Best Time to Buy and Sell Stock II
*/

var maxProfit = function(prices){
    let profit = 0;
    let min = Infinity;
    for(let i = 0; i < prices.length; i++){
        if(min > prices[i]) min = prices[i];
        else if(min < prices[i]){
            profit += prices[i] - min;
            min = prices[i];
        } 
    }
    return profit;
}
// maxProfit([7,1,5,3,6,4]);
// maxProfit([1,2,3,4,5]);
maxProfit([3,3,5,0,0,3,1,4])
// maxProfit([7,6,4,3,1])
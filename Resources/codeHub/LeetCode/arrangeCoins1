/*
You have a total of n coins that you want to form in a staircase shape, where every k-th row must have exactly k coins.

Given n, find the total number of full staircase rows that can be formed.

n is a non-negative integer and fits within the range of a 32-bit signed integer.

LeetCode: 441. Arranging Coins
*/

var arrangeCoins = function(n) {
    if(n === 0) return 0;
    if(n === 1) return 1;
    let num = n;
    for(let i = 1; i <= n; i++){
        num -= i;
        if(num < 0) return i - 1;
    }
};
arrangeCoins(5)
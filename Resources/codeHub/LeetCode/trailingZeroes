/*
Given an integer n, return the number of trailing zeroes in n!.

LeetCode: 172. Factorial Trailing Zeroes
*/

var trailingZeroes = function(n) {
    let numberOfFives = 0;
    
    while (n >= 5) {
        numberOfFives += Math.floor(n / 5);
        n = Math.floor(n / 5);
    }
    
    return numberOfFives;
};
trailingZeroes(20)
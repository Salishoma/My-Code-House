/*
Given an integer n, count the total number of digit 1 appearing in all non-negative integers less than or equal to n.

LeetCode: 233. Number of Digit One
*/

var countDigitOne = function(n) { 
    let count = 0; 
    for (let i = 1; i <= n; i *= 10) { 
        let divider = i * 10; 
        count += Math.floor(n / divider) * i +  
               Math.min(Math.max(n % divider - i + 1, 0), i); 
    } 
    return count; 
} 
countDigitOne(13)
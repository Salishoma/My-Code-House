/*
Given a non-negative integer c, your task is to decide whether there're two integers a and b such that a2 + b2 = c.

LeetCode: 633. Sum of Square Numbers
*/

var judgeSquareSum = function(c) {   
    if (c === 0 || c === 2) return true   
    let sum = 0;
    let lo = 0;
    let hi = Math.floor(Math.sqrt(c));  
    while(lo <= hi) {
        sum = lo*lo + hi*hi;
        if(sum === c) return true;
        else if (sum > c) hi--;
        else lo++
    }  
    return false
};
judgeSquareSum(1000);
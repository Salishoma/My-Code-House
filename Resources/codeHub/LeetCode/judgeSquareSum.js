/*
Given a non-negative integer c, your task is to decide whether there're two integers a and b such that a2 + b2 = c.

LeetCode: 633. Sum of Square Numbers
*/

var judgeSquareSum = function(c) {
    let root = Math.floor(Math.sqrt(c));
    for(let i = root; i >= 0; i--){
        let num = Math.sqrt(c - (i * i));
        if(num % 1 === 0) return true
    }
    return false;
};
judgeSquareSum(1000);
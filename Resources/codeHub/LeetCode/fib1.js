/*
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), for N > 1.
Given N, calculate F(N).

LeetCode: 509. Fibonacci Number
*/

var fib = function(N) {
    if(N<=1) return N;    
    let a=0, b=1, c;    
    for(let i=2;i<=N;i++){
        c=a+b;
        a=b;
        b=c;
    }   
    return c;  
}
fib(12)
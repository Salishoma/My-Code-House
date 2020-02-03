/*
The Tribonacci sequence Tn is defined as follows: 

T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

Given n, return the value of Tn.

LeetCode: 1137. N-th Tribonacci Number
*/

var tribonacci = function(n) {
    if(n === 0) return 0;
    if(n <= 2) return 1;
    let a = 0, b = 1, c= 1, d;
    for(let i = 3; i <= n; i++){
        d = a + b + c;
        a = b;
        b = c;
        c = d;
    }
    return d;
};
tribonacci(15)
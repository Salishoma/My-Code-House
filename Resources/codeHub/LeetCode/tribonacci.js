/*
The Tribonacci sequence Tn is defined as follows: 

T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

Given n, return the value of Tn.

LeetCode: 1137. N-th Tribonacci Number
*/

var tribonacci = function(n) {
    let tri = [0,1,1,2];
    for(let i = 4; i <= n; i++){
        tri[i] = tri[i - 1] + tri[i - 2] + tri[i - 3];
    }
    return tri[n]
};
tribonacci(12)
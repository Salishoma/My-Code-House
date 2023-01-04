/*
Given a positive integer n, break it into the sum of at least two positive integers and maximize the product of those integers. Return the maximum product you can get.

LeetCode: 343. Integer Break
*/

var integerBreak = function(n) {
    if(n <= 3) return n - 1;
    let x = Math.floor(n / 3);
    let rem = n - 3 * x;
    if(rem === 0) return 3 ** x
    if(rem === 1){
        return 3 ** (x - 1) * (rem + 3);
    }
    return 3 ** x * rem;   
};
integerBreak()
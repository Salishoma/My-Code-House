/*
You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.

LeetCode: 70. Climbing Stairs
*/

var climbStairs = function(n) {
    let memo = [];
    let res = 0;
    let i = 0;
    while(n - 2 * i >= 0){
        res += factorial(n - i, n - i, memo)/(factorial(n - 2 * i, n - 2 * i, memo) * factorial(i, i, memo));
        i++;
    }
    return res;
};

function factorial(n, i, memo){
    if(i === 0) return 1;
    if(!memo[i]){
       memo[i] = i * factorial(n, i - 1, memo);
    }
    return memo[i];
}
climbStairs(5)
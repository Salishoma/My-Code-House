/*
Today, the bookstore owner has a store open for customers.length minutes.  Every minute, some number of customers (customers[i]) enter the store, and all those customers leave after the end of that minute.

On some minutes, the bookstore owner is grumpy.  If the bookstore owner is grumpy on the i-th minute, grumpy[i] = 1, otherwise grumpy[i] = 0.  When the bookstore owner is grumpy, the customers of that minute are not satisfied, otherwise they are satisfied.

The bookstore owner knows a secret technique to keep themselves not grumpy for X minutes straight, but can only use it once.

Return the maximum number of customers that can be satisfied throughout the day.

LeetCode: 1052. Grumpy Bookstore Owner
*/

var maxSatisfied = function(customers, grumpy, X) {
    const dp = [];
    dp[0] = !grumpy[0] ? customers[0] : 0;
    let j = 0;
    let max = dp[0];
    for(let i = 1; i < customers.length; i++){
        if(!grumpy[i]){
            dp[i] = dp[j] + customers[i];
            j = i;
        }else dp[i] = 0;
        max = Math.max(max, dp[i]);
    };
    let res = 0;
    let sum = 0;
    let end = 0
    for(let i = 0; i < X; i++){
        sum += customers[i];
        if(dp[i]){
            end = dp[i];
        }
    }
    res = max  - end  + sum;
    let start = dp[0];
    for(let i = X; i < dp.length; i++){
        sum = sum + customers[i] - customers[i - X];
        if(dp[i]) end = dp[i];
        if(dp[i - X]) start = dp[i - X];
        res = Math.max(res, max + start - end + sum);
    }
    return res;
};
maxSatisfied([1,0,1,2,1,1,7,5],[0,1,0,1,0,1,0,1],3)
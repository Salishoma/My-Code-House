/*
Given an integer n, return any array containing n unique integers such that they add up to 0.

LeetCode: 1304. Find N Unique Integers Sum up to Zero
*/

var sumZero = function(n) {
    let ans = [];
    let counter = 0;
    for(let i = 0; i<n-1; i++){
        ans.push(i+1);
        counter += i+1;
    }
    ans.push(-counter);
    return ans;    
};
sumZero(8)
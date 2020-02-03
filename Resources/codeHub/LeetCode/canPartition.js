/*
Given a non-empty array containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.

Note:

Each of the array element will not exceed 100.
The array size will not exceed 200.

LeetCode: 416. Partition Equal Subset Sum
*/

var canPartition = function(nums) {
    let sum=0;
    for(let num of nums){
        sum+= num;
    }
    if(sum%2!=0) return false;
    let half= sum/2;
    let dp=new Array(half+1).fill(false);
    dp[0]=true;
    for(let num of nums){
        for(let i=half; i>=num; i--){
            dp[i]= dp[i] || dp[i-num];
        }
    }
    return dp[half];
};
canPartition([1, 5, 11, 5])
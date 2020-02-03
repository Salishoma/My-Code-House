/*
Given an integer array with all positive numbers and no duplicates, find the number of possible combinations that add up to a positive integer target.

LeetCode: 377. Combination Sum IV
*/

var combinationSum4 = function(nums, target) {
    const dp = [1];
    
    for (let i = 1; i <= target; i++) {
        dp[i] = 0;
        for (let j = 0; j < nums.length; j++) {
            dp[i] += dp[i - nums[j]] || 0;
        }
    }
    return dp[target];
};
combinationSum4([1, 2, 3])
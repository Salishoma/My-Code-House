/*
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

LeetCode: 198. House Robber
*/

var  rob = function(nums) {
    if (nums === null || nums.length === 0) {
        return 0;
    } else if (nums.length == 1) {
        return nums[0];
    }

    let runningTotal = [];
    runningTotal[0] = nums[0],
    runningTotal[1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i < nums.length; i++) {
        runningTotal[i] = Math.max(nums[i] + runningTotal[i - 2], runningTotal[i - 1]);
    }

    return runningTotal[runningTotal.length - 1];
};
rob([2,1,1,2])
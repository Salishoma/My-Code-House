/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

LeetCode: 53. Maximum Subarray
*/

const maxSubArray = (nums) => {
    let solution = nums[0];
    for(let i = 1; i < nums.length; i++){
        nums[i] = Math.max(nums[i], (nums[i]+nums[i-1]))   
        solution = Math.max(nums[i], solution)
    }
    return solution;
};
maxSubArray([-2,1,-3,4,-1,2,1,-5,4])
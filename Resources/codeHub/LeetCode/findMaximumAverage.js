/*
Given an array consisting of n integers, find the contiguous subarray of given length k that has the maximum average value. And you need to output the maximum average value.

LeetCode: 643. Maximum Average Subarray I
*/

var findMaxAverage = function(nums, k) {
    let sum = 0;
    for(let i = 0; i < k; i++){
        sum += nums[i];
    }
    let max = sum;
    for(let i = k; i < nums.length; i++){
        sum += nums[i] - nums[i - k];
        if(max < sum) max = sum;
    }
    return max / k;
};
findMaxAverage([1,12,-5,-6,50,3], 4)
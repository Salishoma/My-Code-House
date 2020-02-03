/*
Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

LeetCode: 268. Missing Number
*/

var missingNumber = function(nums) {
    let sum = nums.reduce((a, b) => a + b);
    return (nums.length * (nums.length + 1)) / 2 - sum; 
};
missingNumber([3,0,1])
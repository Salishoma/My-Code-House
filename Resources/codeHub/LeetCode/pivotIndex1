/*
Given an array of integers nums, write a method that returns the "pivot" index of this array.

We define the pivot index as the index where the sum of the numbers to the left of the index is equal to the sum of the numbers to the right of the index.

If no such index exists, we should return -1. If there are multiple pivot indexes, you should return the left-most pivot index.

LeetCode: 724. Find Pivot Index
*/

var pivotIndex = function(nums) {
    let sum = nums.reduce((acc, val) => acc += val, 0)
    let left = 0
    for ( let i = 0 ; i < nums.length ; i++) {
        left += nums[i]
        if(sum - left === left - nums[i]) {
            return i
        }
    }
    return -1
};
pivotIndex([1, 7, 3, 6, 5, 6])
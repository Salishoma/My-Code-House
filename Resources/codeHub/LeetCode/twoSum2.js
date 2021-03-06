/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

LeetCode: 1. Two Sum
*/

var twoSum = function(nums, target) {
    var hashMap = {}    
    for (let i = 0; i < nums.length; i++) {
        if (typeof hashMap[target - nums[i]] !== 'undefined') {
            return [hashMap[target - nums[i]], i]
        }        
        hashMap[nums[i]] = i
    }
};
twoSum([-3,-1,-5,-2,0],-8)
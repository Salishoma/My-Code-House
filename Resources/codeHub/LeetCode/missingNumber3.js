/*
Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

LeetCode: 268. Missing Number
*/

missingNumber = function(nums) {
    let missing = nums.length;
    for (let i = 0; i < nums.length; i++) missing ^= i ^ nums[i];
    return missing;
}
missingNumber([3,0,1])

/*
Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

LeetCode: 217. Contains Duplicate
*/

var containsDuplicate = function(nums) {
    let set = new Set();
    let i = 0;
    for(i = 0; i < nums.length && !set.has(nums[i]); i++) set.add(nums[i]);
    return i !== nums.length;
};
containsDuplicate([1,1,1,3,3,4,3,2,4,2])
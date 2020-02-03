/*
Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

LeetCode: 287. Find the Duplicate Number
*/

var findDuplicate = function(nums) {
    let seen = {};
    for(let i = 0; i < nums.length; i++){
        if(!seen[nums[i]]){
            seen = 1;
        }else return nums[i];
    }
};
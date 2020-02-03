/*
Given an array nums of integers, return how many of them contain an even number of digits.

LeetCode: 1295. Find Numbers with Even Number of Digits
*/
var findNumbers = function(nums) {
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        count += nums[i].toString().length % 2 === 0 ? 1 : 0;
    }
    return count;
};
findNumbers([12,345,2,6,7896])
/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

LeetCode: 1. Two Sum
*/

var twoSum = function(nums, target) {
    var hashMap = {};
    var arr = [];
    let j;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in hashMap) {
            j = i
            arr = [hashMap[nums[i]], i];
            break;
        }else{
            hashMap[target - nums[i]] = nums[i];
        }
    }
    if(arr.length === 0) return undefined;
    for (let i = 0; i < j; i++) {
        if (arr[0] === nums[i]){
            arr[0] = i;
            break;
        } 
    }
    return arr;
};
twoSum([3,2,4],6)
// twoSum([1,2,3,4,5],5)
twoSum([-3,-1,-5,-2,0],-8)
/*
Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once.

LeetCode: 260. Single Number III
*/

var singleNumber = function(nums) {
    let seen = {};
    for(let i = 0; i < nums.length; i++){
        seen[nums[i]] = ++seen[nums[i]] || 1
    }
    for(let i = 0; i < nums.length; i++){
        if(seen[nums[i]] !== 1){
            let temp = nums[i];
            nums[i] = nums[nums.length - 1];
            nums[nums.length - 1] = temp;
            nums.pop();
            i--;
        }else continue
    }
    return nums
};
singleNumber([1,2,1,3,2,5])
/*
Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

LeetCode: 238. Product of Array Except Self
*/

var productExceptSelf = function(nums) {
    let L = [];
    let R = [];
    let answer = [];
    L[0] = 1
    for(let i = 1; i < nums.length; i++){
        L[i] = nums[i - 1] * L[i - 1];
    }
    R[nums.length - 1] = 1;
    for(let i = nums.length - 2; i >= 0; i--){
        R[i] = nums[i + 1] * R[i + 1];
    }
    for(let i = 0; i < nums.length; i++){
        answer[i] = L[i] * R[i];
    }
    return answer;
};
productExceptSelf([1,2,3,4], [24,12,8,6])
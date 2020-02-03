/*
Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

LeetCode: 152. Maximum Product Subarray
*/

var maxProduct = function(nums) {
    if(nums.length === 0) return 0;
    if(nums.length === 1) return nums[0];
    let max = nums[0];
    for(let i = 0; i < nums.length; i++){
        let product = nums[i];
        for(let j = i + 1; j < nums.length; j++){
            if(product > max) max = product;
            product *= nums[j];
            if(product > max) max = product;
        }
    }
    if(nums[nums.length - 1] > max) max = nums[nums.length - 1] 
    return max === -0? 0: max;
};
maxProduct([-2,0,-1])
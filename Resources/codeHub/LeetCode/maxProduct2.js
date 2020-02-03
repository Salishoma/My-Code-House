/*
Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

LeetCode: 152. Maximum Product Subarray
*/

function maxProduct(nums) {
    let n = nums.length;
    let maxprod= -Infinity, prod = 1;
    for(let i = 0; i < n; i++){
      prod = nums[i] * prod;
      maxprod = Math.max(prod, maxprod);
      if(prod === 0) prod = 1;
    } 
    prod = 1;
    for(let i = n - 1; i >= 0; i--){
        prod = nums[i] * prod;
        maxprod = Math.max(prod, maxprod);
        if(prod === 0) prod = 1;
    }
    return maxprod;
}
maxProduct([-2,0,-1])
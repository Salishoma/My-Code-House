/*
Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

LeetCode: 136. Single Number
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
    return nums;
};
singleNumber([2,2,3,2])
// singleNumber([43,16,45,89,45,-2147483648,45,2147483646,-2147483647,-2147483648,43,2147483647,-2147483646,-2147483648,89,-2147483646,89,-2147483646,-2147483647,2147483646,-2147483647,16,16,2147483646,43])

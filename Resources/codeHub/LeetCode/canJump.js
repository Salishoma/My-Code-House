/*
Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

LeetCode: 55. Jump Game
*/

var canJump = function(nums) {
    let n = nums.length - 1, j = nums.length - 1; 
    for(let i = n - 1; i >= 0; i--){
        if(i + nums[i] >= j){
            j = i
        }
    }
    return j === 0;
}
canJump([2,3,1,1,4])
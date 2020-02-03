/*
Given a binary array, find the maximum number of consecutive 1s in this array.

LeetCode: 485. Max Consecutive Ones
*/

var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 1) count = 0;
        else count++;
        if(count > max) max = count;
    }
    return max;
};
findMaxConsecutiveOnes([1,1,0,1,1,1])
/*
Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

LeetCode: 45. Jump Game II
*/

var jump = function(nums) {
    let globalMax = 0;
    let localMax = 0;
    let step = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        if (localMax < i) { // prevent the last index cannot reach
            return -1;
        }
        if (localMax > nums.length - 1) {
            break;
        }
        const cur = i + nums[i]; // farest we can reach for index i
        globalMax = Math.max(globalMax, cur);
        if (localMax == i) {
            localMax = globalMax;
            step++;
        }
    }
    return step;
};
jump([2,3,4,8,5,2,1,1,1,1,1])
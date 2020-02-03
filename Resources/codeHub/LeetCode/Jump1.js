/*
Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

LeetCode: 45. Jump Game II
*/

var jump = function(nums) {
    let count = 0, ret = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        ret++
        if(i + nums[i] >= nums.length - 1) return ret;
        let max = 0, j = i, k = j, count = -1;
        while(count < nums[i]){
            if(max < j + nums[j]){
                max = j + nums[j];
                k = j;
            }
            count++;
            j++
        }
        i = k - 1;
    }
    return ret;
};
jump([2,3,1,1,4])
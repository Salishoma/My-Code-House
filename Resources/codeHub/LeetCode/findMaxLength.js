/*
Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

LeetCode: 525. Contiguous Array
*/

function findMaxLength(nums) {
    let arr = [];
    Array(2 * nums.length + 1).fill(-2);
    arr[nums.length] = -1;
    let maxlen = 0, count = 0;
    for (let i = 0; i < nums.length; i++) {
        count = count + (nums[i] == 0 ? -1 : 1);
        if (arr[count + nums.length] >= -1) {
            maxlen = Math.max(maxlen, i - arr[count + nums.length]);
        } else {
            arr[count + nums.length] = i;
        }

    }
    return maxlen;
}
findMaxLength([0,0,0,0,1,1,1,0,0,1,1])
findMaxLength([0,1,1,0,1,1,1,0])
/*
Given a binary array nums, you should delete one element from it.

Return the size of the longest non-empty subarray containing only 1's in the resulting array.

Return 0 if there is no such subarray.

LeetCode: 1493. Longest Subarray of 1's After Deleting One Element
*/

var longestSubarray = function(nums) {
    let sum = 0;
    let max = 0;
    let count = 0;
    let zero;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 1) sum++;
        else{
            if(count === 1){
                sum = i - zero - 1;
                count = 0
            };
            count++
            zero = i;
        }
        max = Math.max(max, sum);
    }
    return zero === undefined ? max - 1 : max;
};
longestSubarray([1,1,0,0,1,1,1,0,1])
/*
Given a binary array nums, you should delete one element from it.

Return the size of the longest non-empty subarray containing only 1's in the resulting array.

Return 0 if there is no such subarray.

LeetCode: 1493. Longest Subarray of 1's After Deleting One Element
*/

var kLengthApart = function(nums, k) {
    let j;
    for(let i = 0; i < nums.length; i++){
        if(nums[i]){
            if(j === undefined) j = i;
            else if(i - j <= k) return false;
            j = i;
        }
    }
    return true
};
kLengthApart([0,1,1,1,0,1,1,0,1])

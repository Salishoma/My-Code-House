/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

Find the minimum element.

The array may contain duplicates.

LeetCode: 154. Find Minimum in Rotated Sorted Array II
*/

var findMin = function(nums) {
    for(let i = 0; i < nums.length - 1; i++){
        if(nums[i] > nums[i + 1]) return nums[i + 1];
        else continue;
    }
    return nums[0];
};
findMin([2,2,2,0,1])
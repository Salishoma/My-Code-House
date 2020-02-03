/*
Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

LeetCode: 26. Remove Duplicates from Sorted Array
*/

var removeDuplicates = function(nums) {
    if(nums.length === 0) return 0;
    let j = 0;
    for(let i = 1; i < nums.length; i++){
        if(nums[i] !== nums[j]){
            j++;
            nums[j] = nums[i];
        }
    }
    return j + 1;
};
removeDuplicates([1,1,2])
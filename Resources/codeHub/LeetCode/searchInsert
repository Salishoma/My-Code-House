/*
Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

LeetCode: 35. Search Insert Position
*/

var searchInsert = function(nums, target) {
    let i = 0; let j = nums.length - 1;
    let mid;
    if(nums[i] >= target) return 0;
    if(nums[j] === target) return nums.length - 1;
    if(nums[j] < target) return nums.length;
    while(i < j){
        mid = Math.floor((i + j) / 2);
        if(nums[mid] === target) return mid;
        if(nums[mid] < target && nums[mid + 1] >= target) return mid + 1;
        if(nums[mid] > target && nums[mid - 1] < target) return mid;        
        if(nums[mid] < target) i = mid + 1;
        else if(nums[mid] > target) j = mid - 1;
    }
};
searchInsert([1,2,3,4,5,6,7,8,9,10], 9)
/*
Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

LeetCode: 34. Find First and Last Position of Element in Sorted Array
*/

var searchRange = function(nums, target) {
    let start = 0, end = nums.length; let mid;
    let arr = []
    let getTarget;
    while(start < end){
        mid = Math.floor((start+end)/2);
        if(nums[mid] < target) start = mid + 1;
        else  end = mid;       
    }
    if(nums[start] === target) arr.push(start);
    else arr.push(-1);
    start = 0; end = nums.length;
    while(start < end){
        mid = Math.floor((start+end)/2);
        if(nums[mid] > target) end = mid;
        else start = mid + 1;        
    }
    if(nums[start - 1] === target) arr.push(start - 1)
    else arr.push(-1);
    return arr;
};
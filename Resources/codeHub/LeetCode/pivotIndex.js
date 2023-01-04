/*
Given an array of integers nums, write a method that returns the "pivot" index of this array.

We define the pivot index as the index where the sum of the numbers to the left of the index is equal to the sum of the numbers to the right of the index.

If no such index exists, we should return -1. If there are multiple pivot indexes, you should return the left-most pivot index.

LeetCode: 724. Find Pivot Index
*/

var pivotIndex = function(nums) {
    if(nums.length <= 2) return -1;
    if(nums.length === 3){
        if(nums[0] === nums[2]) return true;
    }
    let sumLeft = 0, sumRight = 0;
    for(let i = nums.length - 1; i >= 2 ; i--){
        sumRight += nums[i];
    }
    if(sumRight + nums[1] === 0) return 0
    let j = 2;
    for(let i = 0; i < nums.length - 2; i++){
        sumLeft += nums[i];
        if(sumRight === sumLeft) return i + 1;
        sumRight -= nums[j];
        j++
    }
    if(sumLeft + nums[nums.length - 2] === 0) return nums.length - 1;
    return -1;
}
pivotIndex([-1,-1,0,-1,-1,0])
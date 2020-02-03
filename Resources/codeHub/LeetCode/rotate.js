/*
Given an array, rotate the array to the right by k steps, where k is non-negative.

LeetCode: 189. Rotate Array
*/

var rotate = function(nums, k) {
    k = k % nums.length;
    let arr = [];
    let j = 0;
    for(let i = nums.length - k; i < nums.length; i++){
        arr.push(nums[j]);
        nums[j] = nums[i];
        j++;
    }
    for(let i = arr.length; i < nums.length - k; i++){
        arr[j] = nums[i];
        j++
    }
    j = 0;
    for(let i = k; i < nums.length; i++){
         nums[i] = arr[j];
        j++
    }
    return nums;
};
rotate([1,2,3,4,5,6,7], 3)
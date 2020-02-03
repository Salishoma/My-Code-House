/*
Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

LeetCode: 268. Missing Number
*/

var missingNumber = function(nums) {
    let set = new Set(nums);
    for(let i = 0; i < nums.length; i++){
        if(set.has(i)) continue;
        else return i;
    }
    return nums.length;
};
missingNumber([3,0,1])
// missingNumber([9,6,4,2,3,5,7,0,1])
// missingNumber([0])
// missingNumber([0,1])
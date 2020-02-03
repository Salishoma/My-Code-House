/*
Given an array of 2n integers, your task is to group these integers into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.

LeetCode: 561. Array Partition I
*/

var arrayPairSum = function(nums) {
    let arr = nums.sort((a, b) =>a - b);
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        if(i % 2 === 0) sum += arr[i]
    }
    return sum;
};
arrayPairSum([1,4,3,2])
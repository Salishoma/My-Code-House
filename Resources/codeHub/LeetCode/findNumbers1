/*
Given an array nums of integers, return how many of them contain an even number of digits.

LeetCode: 1295. Find Numbers with Even Number of Digits
*/

var findNumbers = function(nums) {
    let count = 0;
    for(let n of nums){
        count += Math.floor(Math.log10(n)) % 2 !== 0 ? 1 : 0;
    }
    return count;
};
findNumbers([861,1293,49,223,147])
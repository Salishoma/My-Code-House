/*
The set S originally contains numbers from 1 to n. But unfortunately, due to the data error, one of the numbers in the set got duplicated to another number in the set, which results in repetition of one number and loss of another number.

Given an array nums representing the data status of this set after the error. Your task is to firstly find the number occurs twice and then find the number that is missing. Return them in the form of an array.

LeetCode: 645. Set Mismatch
*/

var findErrorNums = function(nums) {
    let map = new Map();
    let arr = []
    let num;
    for(let i = 0; i < nums.length; i++){
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
        if(map.get(nums[i]) > 1) arr.push(nums[i]);
    }
    for(let i = 1; i <= nums.length; i++){
        if(!map.has(i)){
           arr.push(i);
           return arr;
        }
    }
};
findErrorNums([1,2,2,4])
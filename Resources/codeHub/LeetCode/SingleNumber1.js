/*
Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once.

LeetCode: 260. Single Number III
*/

var singleNumber = function(nums) {
  let obj = {}
  for (let num of nums) {
    if (!obj[num]) { obj[num] = 1; }
    else { delete obj[num] }
  }
  return Object.keys(obj).map(e=>e-0);
};
singleNumber([1,2,1,3,2,5])
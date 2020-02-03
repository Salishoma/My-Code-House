/*
Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note: You are not suppose to use the library's sort function for this problem.

LeetCode: 75. Sort Colors
*/


var sortColors = function(nums) {
  // stores color list
  let count  = [0,0,0];  
  // take count of colors
  nums.forEach(aNum => ++count[aNum]); 
  // push colors back into nums
  for (let i = 0; i < count[0]; ++i) nums[i] = 0;      
  for (let i = count[0]; i < count[0] + count[1]; ++i) nums[i] = 1;  
  for (let i = count[0] + count[1]; i < nums.length; ++i) nums[i] = 2;  
  return nums;
};
sortColors([2,0,2,1,1,0,1])
// sortColors([2,0,2,1,1,0])
/*
Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note: You are not suppose to use the library's sort function for this problem.

LeetCode: 75. Sort Colors
*/

var sortColors = function(nums) {
  let count0 = 0, count1 = 0, count2 = 0;
  for(let i = 0; i < nums.length; i++){
      if(nums[i] === 0) count0++;
      else if(nums[i] === 1) count1++;
      else if(nums[i] === 2) count2++;
  }
    for(let i = 0; i < nums.length; i++){
      if(count0){
          nums[i] = 0;
          count0--;
      }else if(count1){
          nums[i] = 1;
          count1--;
      }else if(count2){
          nums[i] = 2;
          count0--;
      }
  }
  return nums;
};
sortColors([2,0,2,1,1,0])
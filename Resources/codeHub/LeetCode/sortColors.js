/*
Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note: You are not suppose to use the library's sort function for this problem.

LeetCode: 75. Sort Colors
*/

var sortColors = function(nums) {
   const swap = (arr, i, j) =>{
       [arr[i], arr[j]] = [arr[j], arr[i]];
   }
  let i = 0; let j = nums.length - 1; let k = 0;
  while(i < j){
      if(nums[i] === 0) i++;
      else if(nums[i] === 1){
          if(nums[i] >= nums[j]) swap(nums, i, j);          
          j--
      }else if(nums[i] === 2){
          if(nums[i] > nums[j]) swap(nums, i, j);
          j--
      }
  }
  for(let i = 0; i < nums.length; i++){
      if(nums[i] === 0) k = i;
      else break;
  }
  i = k; j = nums.length - 1;
  while(i < j){
       if(nums[i] === 2){
          if(nums[i] > nums[j]) swap(nums, i, j);
          j--
      }else i++;
  }    
  return nums;
};
sortColors([2,0,2,1,1,0,1])
// sortColors([2,0,2,1,1,0])
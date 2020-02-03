/*
A peak element is an element that is greater than its neighbors.

Given an input array nums, where nums[i] ≠ nums[i+1], find a peak element and return its index.

The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

You may imagine that nums[-1] = nums[n] = -∞.

LeetCode: 162. Find Peak Element
*/

var findPeakElement = function(nums) {
  let left = 0;
  let right = nums.length - 1;
  
  while (left < right) {
    // right + left because you're using a sliding window, so it'd be the midpoint between the current left and right pointers
    let pivot = Math.floor((right + left) / 2);

    // if it's at the left border, assume index - 1 has a value of -Infinity
    if (pivot === 0 && nums[pivot] > nums[pivot + 1]) {
      return pivot;
	// if it's at the right border, assume index + 1 has a value of -Infinity
    } else if (pivot === nums.length - 1 && nums[pivot] > nums[pivot - 1]) {
      return pivot;
	// check if current pivot is a peak
    } else if (nums[pivot] > nums[pivot - 1] && nums[pivot] > nums[pivot + 1]) {
      return pivot;
    }
    
    if (nums[pivot] < nums[pivot + 1]) {
      left = pivot + 1;
    } else {
      right = pivot - 1;
    }
  }
  return right;
};
findPeakElement([1,2,3,1])
/*
Given an unsorted array nums, reorder it such that nums[0] < nums[1] > nums[2] < nums[3]....

LeetCode: 324. Wiggle Sort II
*/

var wiggleSort = function(nums) {
  let temp = nums.slice();
  temp = temp.sort((a, b) => a - b);
  const l = nums.length;
  let mid = ((l - 1) / 2) | 0,
    end = l - 1;
  for (let i = 0; i < l; i++) {
    nums[i] = i % 2 === 0 ? temp[mid--] : temp[end--];
  }
};
wiggleSort([1, 3, 2, 2, 3, 1])
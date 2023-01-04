/*
You are given two arrays (without duplicates) nums1 and nums2 where nums1’s elements are subset of nums2. Find all the next greater numbers for nums1's elements in the corresponding places of nums2.

The Next Greater Number of a number x in nums1 is the first greater number to its right in nums2. If it does not exist, output -1 for this number.

LeetCode: 496. Next Greater Element I
*/

var nextGreaterElement = function(nums1, nums2) {
  if (nums1 === null || nums2 === null) return [];
  let map = new Map();
  let stack = [];
  for (let i = 0; i < nums2.length; i++) {
    while (stack.length !== 0 && stack[stack.length - 1] < nums2[i]) {
      map.set(stack.pop(), nums2[i]);
    }
    stack.push(nums2[i]);
  }
  let ans = [];
  for (let each of nums1) {
    ans.push(map.has(each) ? map.get(each) : -1);
  }
  return ans;
};
nextGreaterElement([2,4], [1,2,3,4])
/*
Given a circular array (the next element of the last element is the first element of the array), print the Next Greater Number for every element. 

The Next Greater Number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, output -1 for this number.

LeetCode: 503. Next Greater Element II
*/

var nextGreaterElements = function(nums) {
    let stack = [];
    let ans = [];
    for (let i = 2 * nums.length - 1; i >= 0; i--) {
        while (stack.length > 0 && stack[stack.length-1] <= nums[i % nums.length]) {
            stack.pop();
        }
        ans[i % nums.length] = stack.length > 0 ? stack[stack.length-1] : -1;
        stack.push(nums[i % nums.length])
    }
    return ans;
};
nextGreaterElements([100,1,11,1,120,111,123,1,-1,-100])
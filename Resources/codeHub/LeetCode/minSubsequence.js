/*
Given the array nums, obtain a subsequence of the array whose sum of elements is strictly greater than the sum of the non included elements in such subsequence. 

If there are multiple solutions, return the subsequence with minimum size and if there still exist multiple solutions, return the subsequence with the maximum total sum of all its elements. A subsequence of an array can be obtained by erasing some (possibly zero) elements from the array. 

Note that the solution with the given constraints is guaranteed to be unique. Also return the answer sorted in non-increasing order.

LeetCode: 1403. Minimum Subsequence in Non-Increasing Order
*/

var minSubsequence = function(nums) {
    nums.sort((a, b) => b - a);
    let sum = nums.reduce((a, b) => a + b, 0);
    let add = 0;
    if(nums[0] > sum - nums[0]) return [nums[0]];
    const arr = []
    for(let num of nums){
        arr.push(num)
        add += num;
        if(add > sum - add) return arr;
    }
};
minSubsequence([4,3,10,9,8])
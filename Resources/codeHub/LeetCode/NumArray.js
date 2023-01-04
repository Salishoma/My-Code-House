/*
Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

LeetCode: 303. Range Sum Query - Immutable
*/

var NumArray = function(nums) {
    let curr = 0
    this.dp = nums.map((el) => {
        curr += el
        return curr
    })
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.dp[j] - (this.dp[i-1] ? this.dp[i-1] : 0)
};
const numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
numArray.sumRange(0, 2)
numArray.sumRange(2, 5)
numArray.sumRange(0, 5)
/*
Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

LeetCode: 697. Degree of an Array
*/

var findShortestSubArray = (nums) => {
    const counts = {},firstIndexes = {},lastIndexes = {};
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        let k = nums[i];
        counts[k] = (counts[k] || 0) + 1;
        max = Math.max(max, counts[k]);
        if (firstIndexes[k] === undefined) {
            firstIndexes[k] = i;
        }
        lastIndexes[k] = i;
    }
    let res = nums.length;
    for (let k in counts) {
        if (counts[k] === max) {
            res = Math.min(res, lastIndexes[k] - firstIndexes[k] + 1);
        }
    }
    return res;
}
findShortestSubArray([1,2,2,1,2,1,1,1,1,2,2,2])
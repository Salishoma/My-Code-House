/*
Given an unsorted array return whether an increasing subsequence of length 3 exists or not in the array.

Formally the function should:

Return true if there exists i, j, k
such that arr[i] < arr[j] < arr[k] given 0 ≤ i < j < k ≤ n-1 else return false.
Note: Your algorithm should run in O(n) time complexity and O(1) space complexity.

LeetCode: 334. Increasing Triplet Subsequence
*/

function increasingTriplet(nums) {
    let first = null;
    let second = null;
    for (let num of nums) {
        if (first === null || num <= first) first = num;
        else if (second === null || num <= second) second = num;
        else return true;
    }
    return false;
}
increasingTriplet([1,2,3,4,5])
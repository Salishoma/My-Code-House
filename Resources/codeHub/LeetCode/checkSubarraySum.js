/*
Given a list of non-negative numbers and a target integer k, write a function to check if the array has a continuous subarray of size at least 2 that sums up to a multiple of k, that is, sums up to n*k where n is also an integer.

LeetCode: 523. Continuous Subarray Sum
*/

var checkSubarraySum = function(nums, k) {
    if (nums.length < 2) {
        return false;
    } 
    if (k === 0) {
        return nums.some((x,i) => x === 0 && i > 0 && nums[i-1] === 0);
    }
    let sum = nums[0] % k;
    let prev = sum
    let map = new Set();
    for(let i = 1; i < nums.length; i++){
        sum += nums[i] % k;
        if(sum % k === 0) return true;
        const r = sum % k;
        if(map.has(r)) return true;
        map.add(prev);
        prev = r;
    }
    return false;
};
checkSubarraySum([23, 2, 4, 6, 7], 6)
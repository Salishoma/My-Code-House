/*
Your are given an array of positive integers nums.

Count and print the number of (contiguous) subarrays where the product of all the elements in the subarray is less than k.

LeetCode: 713. Subarray Product Less Than K
*/

function numSubarrayProductLessThanK(nums, k) {
    if (k <= 1) return 0;
    let prod = 1, ans = 0, left = 0;
    for (let right = 0; right < nums.length; right++) {
        prod *= nums[right];
        while (prod >= k) prod /= nums[left++];
        ans += right - left + 1;
    }
    return ans;
}
numSubarrayProductLessThanK([10,5,2,6])
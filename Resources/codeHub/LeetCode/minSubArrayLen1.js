/*
Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.

LeetCode: 209. Minimum Size Subarray Sum
*/

function minSubArrayLen(s, nums) {
    let ans = nums.length;
    let sum = 0;
    let start = 0;
    for(let i = 0; i < nums.length; i++){
        sum = sum + nums[i];
        while(start < i && sum-nums[start] >= s) sum = sum - nums[start++];       
        if(sum >= s) ans = Math.min(ans, i-start+1);
    }
    if(sum < s) return 0;
    return ans;
}
minSubArrayLen(7, [2,3,1,2,4,3])
// minSubArrayLen(15, [1,2,3,4,5])
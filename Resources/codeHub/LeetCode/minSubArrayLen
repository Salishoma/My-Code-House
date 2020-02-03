/*
Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.

LeetCode: 209. Minimum Size Subarray Sum
*/

var minSubArrayLen = function(s, nums) {
    let  i = 0,  j = 0;
    let count = 0, sum = 0;
    let min = Infinity;
    let sum1 = nums.reduce((a, b) => a + b, 0);
    if(sum1 === s) return nums.length;
    while(i<=j && j<nums.length){
        if(nums[j]>=s) return 1;
        if((i === j - 1) && (nums[i] + nums[j] >= s)) return 2;
        if(sum < s){
            sum += nums[j];
            count++;
            if(j < nums.length - 1) j++;
        }else{
            min = Math.min(count, min);
            sum -= nums[i];
            i++;
            if((i=== nums.length-2) && (nums[i]+nums[j] < s)){
               return min;    
            }else count--;
        }
    }
    return 0;
};
minSubArrayLen(7, [2,3,1,2,4,3])
// minSubArrayLen(15, [1,2,3,4,5])
/*
Given an unsorted array of integers, find the length of longest continuous increasing subsequence (subarray).

LeetCode: 674. Longest Continuous Increasing Subsequence
*/

var findLengthOfLCIS = function(nums) {
    if(nums.length === 0) return 0;
    let count = 1, max = 1;
    for(let i = 1; i < nums.length; i++){
        if(nums[i] > nums[i - 1]){
            count++;
        }else count = 1;
        max = Math.max(count, max);
    }
    return max;
}
findLengthOfLCIS([1,3,5,4,7])
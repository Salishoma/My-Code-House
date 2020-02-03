/*
Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

Your algorithm should run in O(n) complexity.

LeetCode: 128. Longest Consecutive Sequence
*/

var longestConsecutive = function(nums) {
    if(nums.length === 0) return 0;
    nums.sort((a, b) => a - b);
    let count = 1;
    let arr = [];
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === nums[i + 1]) continue;
        if(nums[i] + 1 === nums[i + 1]){
            count++;
        }else{
            arr.push(count);
            count = 1;
        }
    }
    return Math.max(...arr);
};
longestConsecutive([1,2,0,1])
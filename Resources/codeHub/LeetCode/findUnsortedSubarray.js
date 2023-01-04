/*
Given an integer array, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order, too.

You need to find the shortest such subarray and output its length.

LeetCode: 581. Shortest Unsorted Continuous Subarray
*/

var findUnsortedSubarray = function(nums) {
    let num = [...nums].sort((a, b) => a - b);
    let i = 0, j = nums.length - 1;
    while(i < j){
        if(nums[i] === num[i] || nums[j] === num[j]){
            if(nums[i] === num[i]) i++;
            if(nums[j] === num[j]) j--;
       }
        else break;
    }
    if(j === i) return 0;
    return  j - i + 1;
};
findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15])
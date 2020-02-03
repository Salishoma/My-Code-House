/*
Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

Your algorithm should run in O(n) complexity.

LeetCode: 128. Longest Consecutive Sequence
*/

var longestConsecutive = function(nums) {
    let set = new Set(nums);
    let arr = Array.from(set)
    let max = 0;
    for(let c of arr){
        if(!set.has(c - 1)){
            let count = 0; 
            let num = c;
            while(set.has(num)){
                count++;
                num++;
            }
            max = Math.max(max, count);
        }
    }
    return max;
};
longestConsecutive([100,4,200,1,3,2])
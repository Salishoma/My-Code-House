/*
Given a sorted integer array without duplicates, return the summary of its ranges.

LeetCode: 228. Summary Ranges
*/

var summaryRanges = function(nums) {
    let i = 0;
    let arr = [];
    for(let j = 1; i < nums.length; j++){
        if(nums[i] + j - i === nums[j]) continue;       
        else{
            if(j - 1 - i >= 1) arr.push(nums[i] + "->" + nums[j - 1]);               
            else arr.push(nums[i] + "");                            
            i = j;
        }
    }
    return arr;
};
summaryRanges([0,1,2,4,5,7])
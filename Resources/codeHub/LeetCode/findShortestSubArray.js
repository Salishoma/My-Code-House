/*
Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

LeetCode: 697. Degree of an Array
*/

var findShortestSubArray = function(nums) {
    let seen = {};
    let seenI = {};
    for(let i = 0; i < nums.length; i++){
        seen[nums[i]] = (seen[nums[i]] || 0) + 1;
        seenI[nums[i]] = i;
    }
    let arr = Object.values(seen);
    let max = Math.max(...arr);
    let min = 50001;
    for(let i = 0; i < nums.length; i++){
        if(max === seen[nums[i]]){
            if(seen[nums[i]] !== true){
                if(min > seenI[nums[i]] - i){
                    min = seenI[nums[i]] - i;
                    seen[nums[i]] = true;
                }
            }
            seen[nums[i]] -= 1;
        }
    }
    return min + 1;
}
findShortestSubArray([1,2,2,3,1,4,2])
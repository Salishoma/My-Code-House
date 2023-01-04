/*
We define a harmounious array as an array where the difference between its maximum value and its minimum value is exactly 1.

Now, given an integer array, you need to find the length of its longest harmonious subsequence among all its possible subsequences.

LeetCode: 594. Longest Harmonious Subsequence
*/

var findLHS = function(nums) {
    let map = new Map();
    let max = 0;
    for(let i = 0; i < nums.length; i++){
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }
    for(let i = 0; i < nums.length; i++){
        if(map.has(nums[i] + 1)){
            max = Math.max(max, map.get(nums[i]) + map.get(nums[i] + 1))
        }
    }
    return max;
};
findLHS([1,3,2,2,5,2,3,7])
findLHS([1,4,1,3,1,-14,1,-13])
/*
A zero-indexed array A of length N contains all integers from 0 to N-1. Find and return the longest length of set S, where S[i] = {A[i], A[A[i]], A[A[A[i]]], ... } subjected to the rule below.

Suppose the first element in S starts with the selection of element A[i] of index = i, the next element in S should be A[A[i]], and then A[A[A[i]]]… By that analogy, we stop adding right before a duplicate element occurs in S.

LeetCode: 565. Array Nesting
*/

var arrayNesting = function(nums) {
    const set = new Set();
    let max = 0;
    for(let i = 0; i < nums.length; i++){
        let elem = nums[i], count = 0;
        while(!set.has(elem)){
            count++;
            set.add(elem);
            elem = nums[elem];
        }
        max = Math.max(max, count);
    }
    return max;
};
arrayNesting([5,4,0,3,1,6,2])
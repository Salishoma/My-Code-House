/*
Given an array A, partition it into two (contiguous) subarrays left and right so that:

Every element in left is less than or equal to every element in right.
left and right are non-empty.
left has the smallest possible size.
Return the length of left after such a partitioning.  It is guaranteed that such a partitioning exists.

LeetCode: 915. Partition Array into Disjoint Intervals
*/

var partitionDisjoint = function(A) {
    let j = A.length - 1;
    let left = [];
    let right = [];
    let max = A[0];
    for(let i = 0; i < A.length; ++i){
        max = Math.max(max, A[i])
        left[i] = max;
    }
    let min = A[j];
    for(let i = j; i >= 0; --i){
        min = Math.min(min, A[i])
        right[i] = min
    }
    for(let i = 1; i < A.length; ++i){
        if(left[i - 1] <= right[i]) return i;
    }
};
partitionDisjoint([5,0,3,8,6])
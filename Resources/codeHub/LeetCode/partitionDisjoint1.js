/*
Given an array A, partition it into two (contiguous) subarrays left and right so that:

Every element in left is less than or equal to every element in right.
left and right are non-empty.
left has the smallest possible size.
Return the length of left after such a partitioning.  It is guaranteed that such a partitioning exists.

LeetCode: 915. Partition Array into Disjoint Intervals
*/

var partitionDisjoint = function(A) {
    let result = 0;
    let minToPass = A[0];
    let max = A[0];
    for(let i = 1; i< A.length ; i++) {
        const val  = A[i];
        if(minToPass <= val) {
            max = Math.max(max, val);
        }
        else {
            result = i;
            minToPass = max;
        }
    }
    return result + 1; 
}
partitionDisjoint()
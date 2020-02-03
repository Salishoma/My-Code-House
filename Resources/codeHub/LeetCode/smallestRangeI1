/*
Given an array A of integers, for each integer A[i] we may choose any x with -K <= x <= K, and add x to A[i].

After this process, we have some array B.

Return the smallest possible difference between the maximum value of B and the minimum value of B.

LeetCode: 908. Smallest Range I
*/

var smallestRangeI = function(A, K) {
    let max = A[0], min = A[0];
    for(let x of A){
        min = Math.min(x, min);
        max = Math.max(x, max);
    }
    return Math.max(0, max - min - 2 * K)
};
smallestRangeI([0,10,6,8,7,5,3], 4)
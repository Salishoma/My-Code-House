/*
We are given an array A of positive integers, and two positive integers L and R (L <= R).

Return the number of (contiguous, non-empty) subarrays such that the value of the maximum array element in that subarray is at least L and at most R.

LeetCode: 795. Number of Subarrays with Bounded Maximum
*/

var numSubarrayBoundedMax = function(A, L, R) {
    let count = 0;
    let j = 1;
    for(let r of A){
        if(r <= R){
            count += j;
            j++
        }else j = 1;
    }
    j = 1;
    for(let l of A){
        if(l < L){
            count -= j;
            j++
        }else j = 1;
    }
    return count;
};
numSubarrayBoundedMax([73,55,36,5,55,14,9,7,72,52],32,69)
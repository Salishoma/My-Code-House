/*
Given an array A of integers, return true if and only if it is a valid mountain array.

Recall that A is a mountain array if and only if:

A.length >= 3
There exists some i with 0 < i < A.length - 1 such that:
A[0] < A[1] < ... A[i-1] < A[i]
A[i] > A[i+1] > ... > A[A.length - 1]

LeetCode: 941. Valid Mountain Array
*/

var validMountainArray = function(A) {
    let n = A.length;
    if(n <= 2) return false;
    if(A[0] >= A[1] || A[n - 2] <= A[n - 1]) return false;
    let up = true;
    for(let i = 1; i < n; i++){
        if(up){
            if(A[i] < A[i - 1]) up = false;
            else if(A[i] === A[i - 1]) return false;
        }else{
            if(A[i] >= A[i - 1]) return false;
        }
    }
    return true;
};
validMountainArray([0,1,2,3,4,5,6,7,8,9])

/*
Given an array A of integers, for each integer A[i] we may choose any x with -K <= x <= K, and add x to A[i].

After this process, we have some array B.

Return the smallest possible difference between the maximum value of B and the minimum value of B.

LeetCode: 908. Smallest Range I
*/

var smallestRangeI = function(A, K) {
    let max = 0, min = 10001, n = A.length, j
    for(let i = 0; i < A.length; i++){
        if(min > A[i]){
            min = A[i];
            j = i;
        }
    }
    A[j] += K, min = A[j] 
    for(let i = 0; i < A.length; i++){
        if(min >= A[i]){
            A[i] = min;
        }else{
            A[i] = A[i] - K;
            if(A[i] < min) A[i] = min;
        }
    }
    return Math.max(...A) - Math.min(...A);
};
smallestRangeI([1,3,6], 3)
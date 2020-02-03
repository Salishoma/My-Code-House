/*
Given an array A of integers, we must modify the array in the following way: we choose an i and replace A[i] with -A[i], and we repeat this process K times in total.  (We may choose the same index i multiple times.)

Return the largest possible sum of the array after modifying it in this way.

LeetCode: 1005. Maximize Sum Of Array After K Negations
*/

var largestSumAfterKNegations = function(A, K) {
    let min, index;
    while(K > 0){
        min = Math.min(...A)
        index = A.indexOf(min);
        A[index] = -1 * min;
        K--;
    }
    return A.reduce((a, b) => a + b, 0);
};
largestSumAfterKNegations([4,2,3], 1)
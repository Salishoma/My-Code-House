/*
For a non-negative integer X, the array-form of X is an array of its digits in left to right order.  For example, if X = 1231, then the array form is [1,2,3,1].

Given the array-form A of a non-negative integer X, return the array-form of the integer X+K.

LeetCode: 989. Add to Array-Form of Integer
*/

var addToArrayForm = function(A, K) {
    for (let i = A.length - 1; i >= 0; i--) {
        if (K === 0) {
            return A;
        }
        let sum = A[i] + K;
        A[i] = sum % 10;
        K = Math.floor(sum / 10);
    }
    if (K) {
        return K.toString().split('').concat(A);
        // return A.unshift(K);
    }
    return A;
};
addToArrayForm([2,1,5], 806)
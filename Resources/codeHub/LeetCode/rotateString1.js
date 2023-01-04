/*
We are given two strings, A and B.

A shift on A consists of taking string A and moving the leftmost character to the rightmost position. For example, if A = 'abcde', then it will be 'bcdea' after one shift on A. Return True if and only if A can become B after some number of shifts on A.

LeetCode: 796. Rotate String
*/

var rotateString = function(A, B) {
    return A.length!== B.length?false:(B+B).includes(A);
};
rotateString('abcde','cdeab')
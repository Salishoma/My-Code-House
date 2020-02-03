/*
We are given two strings, A and B.

A shift on A consists of taking string A and moving the leftmost character to the rightmost position. For example, if A = 'abcde', then it will be 'bcdea' after one shift on A. Return True if and only if A can become B after some number of shifts on A.

LeetCode: 796. Rotate String
*/

var rotateString = function(A, B) {  
    let C = A
    let count = 0;
    while(count < A.length){
        if(B === C) return true;
        else{
            C = C.slice(1) +C[0];
            count++
        }
    }
    return false;
};
rotateString('abcde','cdeab')
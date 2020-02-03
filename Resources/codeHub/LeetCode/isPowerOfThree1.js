/*
Given an integer, write a function to determine if it is a power of three.

LeetCode: 326. Power of Three
*/

var isPowerOfThree = function(n) {
    if(n<=0) return false;
    if(n===1) return true;
    return (3**19)%n===0;
};
isPowerOfThree(27)
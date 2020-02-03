/*
Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

LeetCode: 342. Power of Four
*/

var isPowerOfFour = function(num) {
    return num > 0 ? (num-1) % 3 === 0 && 4 ** 16 % num === 0 : 0
}
isPowerOfFour(64)
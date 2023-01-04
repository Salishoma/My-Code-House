/*
Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

LeetCode: 258. Add Digits
*/

var addDigits = function(num) {
    return (!num)?0:(num%9||9);
};
addDigits(25)
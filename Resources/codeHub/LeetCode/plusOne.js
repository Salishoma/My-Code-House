/*
Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

LeetCode: 66. Plus One
*/

var plusOne = function(digits) {
    let floor = 1;
    for(let i = digits.length - 1; i >= 0; i--){
        digits[i] = digits[i] + floor;
        if(digits[i] >= 10){
            floor = Math.floor(digits[i] / 10);
            digits[i] = digits[i] % 10;
            
        }else return digits
    }
    digits[0] = 1;
    digits.push(0);
    return digits;
};
plusOne([2,9,9])
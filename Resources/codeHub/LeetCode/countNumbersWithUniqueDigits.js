/*
Given a non-negative integer n, count all numbers with unique digits, x, where 0 ≤ x < 10n.

LeetCode: 357. Count Numbers with Unique Digits
*/

var countNumbersWithUniqueDigits = function(n) {
    if(n === 0) return 1;
    let product = 9;
    let sum = 10;
    for(let i = 0; i < n - 1; i++){
        product *= 9 - i;
        sum += product;
    }
    return sum;
};
countNumbersWithUniqueDigits(4)
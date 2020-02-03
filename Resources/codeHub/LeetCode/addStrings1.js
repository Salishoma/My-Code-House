/*
Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

Note:

The length of both num1 and num2 is < 5100.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly.

LeetCode: 415. Add Strings
*/

var addStrings = function(num1, num2) {
    let str = ""
    let carry = 0
    for (let i=num1.length-1, j=num2.length-1; i>=0 || j>=0 || carry === 1; i--, j--) {
        let first = i < 0 ? 0 : num1.charCodeAt(i) - '0'.charCodeAt(0)
        let second = j < 0 ? 0 : num2.charCodeAt(j) - '0'.charCodeAt(0)
        let res = (first + second + carry) % 10
        str = res + str
        carry = Math.floor((carry + first + second) / 10)
    }
    return str
};
addStrings("23", "77")
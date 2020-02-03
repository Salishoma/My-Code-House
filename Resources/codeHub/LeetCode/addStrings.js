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
    let arr = Array(Math.max(num1.length, num2.length));
    let k = arr.length - 1;
    let carry = 0;
    for(let i = num1.length - 1, j = num2.length - 1; i >= 0 || j >= 0; i--, j--){
        if(num1[i] === undefined){
            arr[k] = parseInt(num2[j]) + carry;
        }else if(num2[j] === undefined){
            arr[k] = parseInt(num1[i]) + carry;
        }else{
            arr[k] = parseInt(num1[i]) + parseInt(num2[j]) + carry;
        }
        if(arr[k] >= 10){
            carry = 1;
            arr[k] -= 10;
        }else carry = 0;
        k--;
    }
    if(carry > 0) arr.unshift(carry);
    let add = arr.join("")
    return add;
};
addStrings("23", "77")
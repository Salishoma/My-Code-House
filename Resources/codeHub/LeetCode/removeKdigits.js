/*
Given a non-negative integer num represented as a string, remove k digits from the number so that the new number is the smallest possible.

Note:
The length of num is less than 10002 and will be ≥ k.
The given num does not contain any leading zero.

LeetCode: 402. Remove K Digits
*/

var removeKdigits = function(num, k) {
    const stack = [];
    
    for (let i = 0; i < num.length; i++) {
        let digit = num[i];
        while (k > 0 && stack.length > 0 && stack[stack.length - 1] > digit) {
            stack.pop();
            k--;
        }
        stack.push(digit);
    }
    
    while (k-- > 0) stack.pop();
    while (stack[0] === '0') stack.shift();
    return stack.length > 0 ? stack.join('') : '0';
};
removeKdigits("9964143637881536115347", "6")
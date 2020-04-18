/*
Given a number s in their binary representation. Return the number of steps to reduce it to 1 under the following rules:

If the current number is even, you have to divide it by 2.

If the current number is odd, you have to add 1 to it.

It's guaranteed that you can always reach to one for all testcases.

LeetCode: 1404. Number of Steps to Reduce a Number in Binary Representation to One
*/

var numSteps = function(s) {
    if(s.length === 1) return 0;
    let j = s.length - 1;
    let count = 0;
    let num = 0;
    for(let c of s){
        if(c === "1") num = BigInt((2 *parseInt(c)) ** j) + BigInt(num);
        j--
    }
    while(num > 1n){
        if(num % 2n === 0n) num /= 2n;
        else num = num + 1n;
        count++;
    }
    return count;
};
numSteps("10")
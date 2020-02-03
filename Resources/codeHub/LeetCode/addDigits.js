/*
Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

LeetCode: 258. Add Digits
*/

var addDigits = function(num) {
    let numStr = String(num);
    let add = 10;
    while(add >= 10){
        add = 0;
        for(let el of numStr) add += +el;
        numStr = "" + add;
    }
    return add;
};
addDigits(38)
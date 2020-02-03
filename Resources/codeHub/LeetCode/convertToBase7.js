/*
Given an integer, return its base 7 string representation.

LeetCode: 504. Base 7
*/

var convertToBase7 = function(num) {
    if(num === 0) return "0"
    let str =""
    let n = Math.abs(num)
    while(n > 0){
        str = n % 7 + str;
        n = Math.floor(n / 7);
    }
    let sign = num > 0? "" : "-"
    return `${sign}${str}`
};
convertToBase7(49)
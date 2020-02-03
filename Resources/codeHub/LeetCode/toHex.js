/*
Given an integer, write an algorithm to convert it to hexadecimal. For negative integer, two’s complement method is used.

Note:

All letters in hexadecimal (a-f) must be in lowercase.
The hexadecimal string must not contain extra leading 0s. If the number is zero, it is represented by a single zero character '0'; otherwise, the first character in the hexadecimal string will not be the zero character.
The given number is guaranteed to fit within the range of a 32-bit signed integer.
You must not use any method provided by the library which converts/formats the number to hex directly.

LeetCode: 405. Convert a Number to Hexadecimal
*/

var toHex = function(num) {
    if(num === 0) return "0"
    if (num < 0) {
        num = 0xFFFFFFFF + num + 1;
    }
    var str = ""; 
    while(num > 0){
        var rem = num % 16;
        if(rem === 10) rem = "a";
        else if(rem === 11) rem = "b";
        else if(rem === 12) rem = "c";
        else if(rem === 13) rem = "d";
        else if(rem === 14) rem = "e";
        else if(rem === 15) rem = "f";
        str += rem;
        num = Math.floor(num / 16)        
    }
    return str = str.split("").reverse().join("")
};
toHex(26)
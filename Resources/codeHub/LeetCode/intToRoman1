/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999.

LeetCode: 12. Integer to Roman
*/

var intToRoman = function(num) {
    let y = num;
    let arr = [];
    while(y > 0){
        if(y >= 1000){
            arr.push("M")
            y -= 1000;
        }
        if(y >= 900 && y < 1000){
            arr.push("CM");
            y -= 900;
        }
        if(y >= 500 && y < 900){
            arr.push("D");
            y -= 500;
        }
        if(y >= 400 && y < 500){
            arr.push("CD");
            y -= 400;
        }
        if(y >= 100 && y < 400){
            arr.push("C");
            y -= 100;
        }
        if(y >= 90 && y < 100){
            arr.push("XC");
            y -= 90;
        }
        if(y >= 50 && y < 90){
            arr.push("L");
            y -= 50;
        }
        if(y >= 40 && y < 50){
            arr.push("XL");
            y -= 40;
        }
        if(y >= 10 && y < 40){
            arr.push("X");
            y -= 10;
        }
        if(y >= 9 && y < 10){
            arr.push("IX");
            y -= 9;
        }
        if(y >= 5 && y < 9){
            arr.push("V");
            y -= 5;
        }
        if(y >= 4 && y < 5){
            arr.push("IV");
            y -= 4;
        }
        if(y >= 1 && y < 4){
            arr.push("I");
            y -= 1;
        }
    }
    let romNum = arr.reduce((a,b) => a + b)
    return romNum;  
};
intToRoman(3999)
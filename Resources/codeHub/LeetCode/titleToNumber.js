/*
Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 
    ...

LeetCode: 171. Excel Sheet Column Number
*/

var titleToNumber = function(s) {
    if(!s) return 0;
    let code = "A".charCodeAt(0) - 1;
    let n = s.length - 1;
    let res = 0;
    for(let char of s){
        res += 26 ** n * (char.charCodeAt(0) - code);
        n--
    }
    return res;
};
titleToNumber("BAABA")
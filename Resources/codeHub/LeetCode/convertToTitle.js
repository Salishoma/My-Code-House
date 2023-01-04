/*
Given a positive integer, return its corresponding column title as appear in an Excel sheet.

For example:

    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB 
    ...

LeetCode: 168. Excel Sheet Column Title
*/

var convertToTitle = function(n) {
    let rem;
    let str = "";
    while(n > 0){
        rem = n % 26;
        if(rem === 0){
            rem = 26;
        }
        str = String.fromCharCode(rem + 64) + str;
        if(n % 26 === 0){
            n = Math.floor(n / 26);
            n--;
        }else n = Math.floor(n / 26);
        
    }
    return str;
};
convertToTitle(701)
/*
Given two binary strings, return their sum (also a binary string).

The input strings are both non-empty and contains only characters 1 or 0.

LeetCode: 67. Add Binary
*/

var addBinary = function(a, b) {
    let x = a.length - 1;
    let y = b.length - 1;
    let over = 0;
    let sum = over;
    let arr = [];
    let str = ""
    while(x >= 0 || y >= 0){
        if(x < 0){
            sum = parseInt(b[y]) + over;
            if(sum > 1){
                over = Math.floor(sum / 2);
                sum = sum % 2;
            }else over = 0;
            arr.push(sum);
        } 
        else if(y < 0){
            sum = parseInt(a[x]) + over;
            if(sum > 1){
                over = Math.floor(sum / 2);
                sum = sum % 2;
            }else over = 0;
            arr.push(sum);
        }
        else{
            sum = parseInt(a[x]) + parseInt(b[y]) + over;
            if(sum > 1){
                over = Math.floor(sum / 2);
                sum = sum % 2;
            }else over = 0;
            arr.push(sum);
        }
        x--; y--
    }
    if(over >= 1) arr.push(1)
    str = arr.reverse().join('');
    return str;
};
addBinary("1010", "1011")

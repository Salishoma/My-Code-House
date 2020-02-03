/*
Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

LeetCode: 709. To Lower Case
*/

var toLowerCase = function(str) {
    let s = ""
    str.split("").forEach(char => {
        let sum = 0;
        if(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90){
           sum += char.charCodeAt(0) + 32;
        }else sum += char.charCodeAt(0);
        s += String.fromCharCode(sum);
    })
    return s
};
toLowerCase("HelloFRieND")
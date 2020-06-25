/*
For strings S and T, we say "T divides S" if and only if S = T + ... + T  (T concatenated with itself 1 or more times)

Return the largest string X such that X divides str1 and X divides str2.

LeetCode: 1071. Greatest Common Divisor of Strings
*/

var gcdOfStrings = function(str1, str2) {
    if(str1 + str2 !== str2 + str1) return "";
    let s = "";
    let str = "";
    const length = Math.min(str1.length, str2.length)
    for(let i = 0; i < length; i++){
        s = `${s}${str1[i]}`
        if(!(str1.length % s.length) && !(str2.length % s.length)) str = s;
    }
    return str;
};
gcdOfStrings("ABCABC","ABC")

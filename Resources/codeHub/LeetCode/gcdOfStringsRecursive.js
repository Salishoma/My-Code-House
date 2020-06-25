/*
For strings S and T, we say "T divides S" if and only if S = T + ... + T  (T concatenated with itself 1 or more times)

Return the largest string X such that X divides str1 and X divides str2.

LeetCode: 1071. Greatest Common Divisor of Strings
*/

var gcdOfStrings = function(str1, str2) {
    if(str1 + str2 !== str2 + str1) return "";
    const gcd = (x, y) => !(y % x) ? x : gcd(y % x, x);
    return str1.slice(0, gcd(str1.length, str2.length));
};
gcdOfStrings("OBCNOOBCNOOBCNOOBCNOOBCNOOBCNOOBCNOOBCNO",
"OBCNOOBCNOOBCNOOBCNOOBCNOOBCNOOBCNOOBCNOOBCNOOBCNOOBCNOOBCNOOBCNO")
/*
Given a binary string s (a string consisting only of '0' and '1's).

Return the number of substrings with all characters 1's.

Since the answer may be too large, return it modulo 10^9 + 7.

LeetCode: 1513. Number of Substrings With Only 1s
*/

var numSub = function(s) {
    let res = 0;
    let count = 0;
    const MOD = Math.pow(10, 9) + 7;
    for(let one of s){
        count = one === "1" ? (count + 1) % MOD : 0
        res = (res + count) % MOD;
    }
    return res;
};
numSub("0110111")
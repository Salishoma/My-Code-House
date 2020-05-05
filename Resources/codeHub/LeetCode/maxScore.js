/*
Given a string s of zeros and ones, return the maximum score after splitting the string into two non-empty substrings (i.e. left substring and right substring).

The score after splitting a string is the number of zeros in the left substring plus the number of ones in the right substring.

LeetCode: 1422. Maximum Score After Splitting a String
*/

var maxScore = function(s) {
    let countZero = 0, countOne = 0;
    for(let num of s){
        if(num === "1") countOne++;
    }
    let max = 0;
    for(let i = 0; i < s.length - 1; i++){
        if(s[i] === "0") countZero++;
        else countOne--;
        max = Math.max(max, countZero + countOne)
    }
    return max;
};
maxScore("011101")
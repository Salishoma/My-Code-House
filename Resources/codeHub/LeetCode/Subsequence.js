/*
Given a string s and a string t, check if s is subsequence of t.

You may assume that there is only lower case English letters in both s and t. t is potentially a very long (length ~= 500,000) string, and s is a short string (<=100).

A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ace" is a subsequence of "abcde" while "aec" is not).

LeetCode: Is Subsequence
*/

var isSubsequence = function(s, t) {
    let j = 0;
    let n = s.length;
    if(n === 0) return true;
    for(let c of t){
        if(s[j] === c) j++;
        if(j === n) return true;
    }
    return false;
}
isSubsequence("abc", "ahbgdc")
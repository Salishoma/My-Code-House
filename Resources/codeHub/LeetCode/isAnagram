/*
Given two strings s and t , write a function to determine if t is an anagram of s.

LeetCode: 242. Valid Anagram
*/

var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    let seen = {};
    for(let i = 0; i < s.length; i++) seen[s[i]] = ++seen[s[i]] || 1;
    for(let i = 0; i < s.length; i++){
        if(seen[t[i]] > 0) seen[t[i]] -= 1;
        else return false;
    }
    return true;
};
isAnagram("anagram", "nagaram")
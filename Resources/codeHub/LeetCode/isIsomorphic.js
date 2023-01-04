/*
Given two strings s and t, determine if they are isomorphic.

Two strings are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

LeetCode: 205. Isomorphic Strings
*/

var isIsomorphic = function(s, t) {
    let seen = {};
    for(let i = 0; i < s.length; i++){
        if(!seen[s[i]]){
            seen[s[i]] = t[i];
        }else{
            if(seen[s[i]] !== t[i]) return false;
        }
    }
    let arr = Object.values(seen)
    return new Set(arr).size === arr.length;
};
isIsomorphic("egg", "add")
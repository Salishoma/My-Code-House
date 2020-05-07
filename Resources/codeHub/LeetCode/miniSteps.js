/*
Given two equal-size strings s and t. In one step you can choose any character of t and replace it with another character.

Return the minimum number of steps to make t an anagram of s.

An Anagram of a string is a string that contains the same characters with a different (or the same) ordering.

LeetCode: 1347. Minimum Number of Steps to Make Two Strings Anagram
*/

var minSteps = function(s, t) {
    let map = new Map();
    let map2 = new Map()
    for(let i = 0; i < s.length; i++){
        if(!map.has(s[i])) map.set(s[i], 1);
        else map.set(s[i], map.get(s[i]) + 1);
        if(!map2.has(t[i])) map2.set(t[i], 1);
        else map2.set(t[i], map2.get(t[i]) + 1);
    }
    let res = 0;
    for(let c of s){
        if(!map2.has(c)){
            res += map.get(c);
            map2.set(c, map.get(c));
        }else if(map2.get(c) < map.get(c)){
            res += Math.abs(map.get(c) - map2.get(c));
            map2.set(c, map.get(c));
        }
    }
    return res;
};
minSteps("leetcode", "practice")
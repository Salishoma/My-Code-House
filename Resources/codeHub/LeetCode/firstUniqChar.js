/*
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

LeetCode: 387. First Unique Character in a String

*/

var firstUniqChar = function(s) {
    let map = new Map()
    for(let el of s){
        if(!(map.has(el))) map.set(el, 1)
         else map.set(el, map.get(el) + 1) 
    }
    for(let i = 0; i < s.length; i++){
        if(map.get(s[i]) === 1) return i;
    }
    return -1;
};

firstUniqChar("leetcode")
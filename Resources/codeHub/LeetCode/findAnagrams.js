/*
Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.
Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.
The order of output does not matter.

LeetCode: 438. Find All Anagrams in a String
*/

const prime = {"a": 2, "b": 3, "c": 5, "d": 7, "e": 11, "f": 13, "g": 17, "h": 19, "i": 23, "j": 29, "k": 31, "l": 37, "m": 41, "n": 43, "o": 47, "p": 53, "q": 59, "r": 61, "s": 67, "t": 71, "u": 73, "v": 79, "w": 83, "x": 89, "y": 97, "z": 101}
var findAnagrams = function(s, p) {
    let m = s.length
    let n = p.length;
    let str = s.substr(0, n);
    let num = 0;
    let prod = 0;
    let arr = [];
    for(let i = 0; i < p.length; i++){
        num += prime[p[i]] * prime[p[i]];
        prod += prime[str[i]] * prime[str[i]];
    }
    if(prod === num){
        arr.push(0);
    }
    for(let i = n; i < s.length; i++){
        prod += prime[s[i]] * prime[s[i]] - prime[s[i - n]] *  prime[s[i - n]];
        if(prod === num){
            arr.push(i - n + 1);
        }
    }
    return arr;
};
findAnagrams("cbaebabacd","abc")
findAnagrams("eklpyqrbgjdwtcaxzsnifvhmou", "yqrbgjdwtcaxzsnifvhmou")
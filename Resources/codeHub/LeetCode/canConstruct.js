/*
Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Note:
You may assume that both strings contain only lowercase letters.

LeetCode: 383. Ransom Note
*/

var canConstruct = function(ransomNote, magazine) {
    let seen = {};
    for(let el of ransomNote){
        seen[el] = ++seen[el] ||  1;
    }
    for(let el of magazine){
        if(!seen[el]) continue;
        else if(seen[el] > 0) seen[el] -= 1;
    }
    for(let el of magazine){
        if(seen[el] !== 0) return false;
    }
    return true;
};
canConstruct("aa", "aab")
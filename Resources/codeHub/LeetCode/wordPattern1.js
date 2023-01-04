/*
Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

LeetCode: 290. Word Pattern
*/

var wordPattern = function(pattern, str) {
    str = str.split(' ');
    pattern = pattern.split('');
    if(str.length !== pattern.length) return false;
    if(new Set(str).size !== new Set(pattern).size) return false;
    const map = new Map();
    const set = new Set()
    for(let i = 0; i < str.length; i++){
        if(!map.has(pattern[i])){
            if(set.has(str[i])) return false;
            map.set(pattern[i], str[i]);
            set.add(str[i]);
        }else{
          if(map.get(pattern[i]) !== str[i]) return false;  
        }
    }
    return true;  
};
wordPattern("abba", "dog cat cat dog")
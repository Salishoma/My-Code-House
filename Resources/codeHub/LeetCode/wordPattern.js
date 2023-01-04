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

    let obj = {};
    pattern.forEach((p, i) => {
        obj[p] = str[i];
    });
    
    return pattern.map(p => obj[p]).join(' ') === str.join(' ')   
};
wordPattern("abba", "cat dog dog cat")
// wordPattern("abba", "dog dog dog dog")
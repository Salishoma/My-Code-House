/*
Given a word, you need to judge whether the usage of capitals in it is right or not.

We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital, like "Google".
Otherwise, we define that this word doesn't use capitals in a right way.

LeetCode: 520. Detect Capital
*/

var detectCapitalUse = function(word) {
    let p = word;
    if(p.toUpperCase() === word) return true;
    else if(p[0].toUpperCase() + p.slice(1).toLowerCase() === word) return true;
    else if(p.toLowerCase() === word) return true;
    else return false;
};
detectCapitalUse("FlaG")
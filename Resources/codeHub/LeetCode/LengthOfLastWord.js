/*
Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word (last word means the last appearing word if we loop from left to right) in the string.

If the last word does not exist, return 0.

Note: A word is defined as a maximal substring consisting of non-space characters only.

LeetCode: 58. Length of Last Word
*/

var lengthOfLastWord = function(s) {
    let str = s.trim()
    let j = 0;
    for(let i = str.length - 1; i >= 0; i--){
        if(str[i] === " ") break;
        else j++;
    }
    return j;
};

lengthOfLastWord("Hello World welldonemyfriend")
lengthOfLastWord("a e ")

/*
Given a palindromic string palindrome, replace exactly one character by any lowercase English letter so that the string becomes the lexicographically smallest possible string that isn't a palindrome.

After doing so, return the final string.  If there is no way to do so, return the empty string.

LeetCode: 1328. Break a Palindrome
*/

var breakPalindrome = function(palindrome) {
    if(palindrome.length === 1){
        return "";
    }
    let str = "";
    let a ="a";
    let count = 0
    for(let letter of palindrome){
        if(a < letter  && count < 1){
            count++;
            str += "a";
        }
        else str += letter
    }
    if(new Set(str).size === 1){
        str = palindrome.slice(0,-1) + "b";
    }
    return str
};
breakPalindrome("abccba")
/*
Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

This is case sensitive, for example "Aa" is not considered a palindrome here.

Note:
Assume the length of given string will not exceed 1,010.

LeetCode: 409. Longest Palindrome
*/

var longestPalindrome = function(s) {
    // if(new Set(s.split("")).size === 1) return s.length;
    let seen = {};
    let count = 0;
    let one = 0;
    for(let i = 0; i < s.length; i++){
        seen[s[i]] = (seen[s[i]] || 0) + 1;
    }
    let arr = Object.values(seen);
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            count += arr[i];
            arr[i] -= arr[i];
        }
        else{
            count += arr[i] - 1;
            arr[i] -= (arr[i] - 1);
            
        }
    }
    if(arr.includes(1)) count += 1;
    return count;
};
longestPalindrome("abccccdd")
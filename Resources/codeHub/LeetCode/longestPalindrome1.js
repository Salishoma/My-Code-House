/*
Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

This is case sensitive, for example "Aa" is not considered a palindrome here.

Note:
Assume the length of given string will not exceed 1,010.

LeetCode: 409. Longest Palindrome
*/

var longestPalindrome = function(s) {
  let ans = 0;
  let keys = {};
  
  for (let char of s) {
    keys[char] = (keys[char] || 0) + 1;
    if (keys[char] % 2 == 0) ans += 2;
  }
  return s.length > ans ? ans + 1 : ans;
};
longestPalindrome("abccccdd")
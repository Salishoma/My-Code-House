/*
Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

LeetCode: 557. Reverse Words in a String III
*/

var reverseWords = function(s) {
    
    s = s.split('').reverse().join('');
    s = s.split(' ').reverse().join(' ');    
    return s;
};
reverseWords("Let's take LeetCode contest")
reverseWords(" a good   example ")
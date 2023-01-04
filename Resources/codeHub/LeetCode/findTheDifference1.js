/*
Given two strings s and t which consist of only lowercase letters.

String t is generated by random shuffling string s and then add one more letter at a random position.

Find the letter that was added in t.

LeetCode: 389. Find the Difference
*/

var findTheDifference = function(s, t) {
    let sum = 0;
    let sum1 = 0;
    for(let i = 0; i < s.length; i++){
        sum += s[i].charCodeAt(0);
    }
    for(let i = 0; i < t.length; i++){
        sum1 += t[i].charCodeAt(0);
    }
    return String.fromCharCode(sum1 - sum);
};
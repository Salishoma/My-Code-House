/*
Given a string s and an integer k.

Return the maximum number of vowel letters in any substring of s with length k.

Vowel letters in English are (a, e, i, o, u).

LeetCode: 1456. Maximum Number of Vowels in a Substring of Given Length
*/

var maxVowels = function(s, k) {
    const set = new Set("aeiou");
    let count = 0;
    let num = 0;
    let max = 0;
    for(let i = 0; i < s.length; i++){
        if(num < k) num++;
        else if(set.has(s[i - num])) count--;
        if(set.has(s[i])) count++;
        max = Math.max(count, max);
    }
    return max;
};
maxVowels("abciiidef", 3)
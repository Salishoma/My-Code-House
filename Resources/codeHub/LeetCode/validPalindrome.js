/*
Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

LeetCode: 680. Valid Palindrome II
*/

var validPalindrome = function(s) {
    let i = 0, j = s.length - 1, count1 = 0;
    while(i <= j){
        if(s[i] !== s[j]){
            if(s[i] === s[j - 1]) j--;
            else if(s[i + 1] === s[j]) i++;
            count1++;
            if(count1 > 1) break;
        }else{
            i++; j--;
        }
    }
    i = 0; j = s.length - 1; let count2 = 0;
    while(i <= j){
        if(s[i] !== s[j]){
            if(s[i + 1] === s[j]) i++;
            else if(s[i] === s[j - 1]) j--;
            count2++;
            if(count2 > 1) break;
        }else{
            i++; j--;
        }
    }
    return count1 < 2 || count2 < 2;
};
validPalindrome("ebcbbececabbacecbbcbe")
/*
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

LeetCode: 125. Valid Palindrome
*/

var isPalindrome = function(s) {
    s = s.toLowerCase();
    let i = 0, j = s.length - 1;
    while(i <= j){
        if(!/[a-z0-9]/.test(s[i])){
            i++;
            continue;
        }
        if(!/[a-z0-9]/.test(s[j])){
            j--;
            continue;
        }
        if(s[i] !== s[j]) return false;
        i++;
        j--;
    }        
    return true;
};
isPalindrome("A man, a plan, a canal: Panama")
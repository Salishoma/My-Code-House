/*
You are given two strings s and t of the same length. You want to change s to t. Changing the i-th character of s to i-th character of t costs |s[i] - t[i]| that is, the absolute difference between the ASCII values of the characters.

You are also given an integer maxCost.

Return the maximum length of a substring of s that can be changed to be the same as the corresponding substring of twith a cost less than or equal to maxCost.

If there is no substring from s that can be changed to its corresponding substring from t, return 0.

LeetCode: 1208. Get Equal Substrings Within Budget
*/

var equalSubstring = function(s, t, maxCost) {
    let arr = [];
    let count = 0;
    let sum = 0;
    for(let i = 0; i < s.length; i++){
        arr[i] = Math.abs(s[i].charCodeAt(0) - t[i].charCodeAt(0));
    }
    let j = 0;
    for(let i = 0; i < s.length; i++){
        sum += arr[i];
        if(sum <= maxCost) count++;
        else{
            sum -= arr[j];
            j++;
        }
    }
    return count;
};
equalSubstring("fkfnkrfunni","jyufzxzfbsa",18)
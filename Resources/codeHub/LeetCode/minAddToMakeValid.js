/*
Given a string S of '(' and ')' parentheses, we add the minimum number of parentheses ( '(' or ')', and in any positions ) so that the resulting parentheses string is valid.

Formally, a parentheses string is valid if and only if:

It is the empty string, or
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.
Given a parentheses string, return the minimum number of parentheses we must add to make the resulting string valid.

LeetCode: 921. Minimum Add to Make Parentheses Valid
*/

var minAddToMakeValid = function(S) {
    if(S.length === 0) return 0;
    let arr = [S[0]];
    let res = 0;
    let j = 0;
    for(let i = 1; i < S.length; i++){
        if(S[i] === ")"){
            if(arr[j] === "("){
                arr.pop();
                j--
            }else{
                arr.push(S[i]);
                j++;
            }
        }else{
            arr.push("(");
            j++;
        }
    }
    return arr.length
};
minAddToMakeValid("()))(())(((()()(())(()())())(")
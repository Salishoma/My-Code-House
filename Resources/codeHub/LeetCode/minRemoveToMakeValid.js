/*
Given a string s of '(' , ')' and lowercase English characters. 

Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

Formally, a parentheses string is valid if and only if:

It is the empty string, contains only lowercase characters, or
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.

LeetCode: 1249. Minimum Remove to Make Valid Parentheses
*/

var minRemoveToMakeValid = function(s) {
    let x = 0;
    const arr = [];
    for(let c of s){
        if(c === ")"){
            if(x === 0) continue;
            x--;
        }else if(c === "("){
            x++;
        }
        arr.push(c);
    }
    let i = arr.length - 1;
    while(x !== 0 && i >= 0){
        if(arr[i] === "("){
            arr[i] = "";
            x--;
        }
        i--;
    }
    return arr.join("");
};
minRemoveToMakeValid("lee(t(c)o)de)")
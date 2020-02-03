/*
Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

LeetCode: 844. Backspace String Compare
*/

var backspaceCompare = function(S, T) {
    let s = "";
    let t = "";
    let count = 0;
    for(let i = S.length - 1; i >= 0; i--){
        if(S[i] === "#") count++
        else if(count > 0) count--
        else s += S[i]
    }
    count = 0;
    for(let i = T.length - 1; i >= 0; i--){
        if(T[i] === "#") count++
        else if(count > 0) count--
        else t += T[i]
    }
    return s === t;
};
backspaceCompare("ab##","c#d#")
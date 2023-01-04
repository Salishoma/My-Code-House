/*
A valid parentheses string is either empty (""), "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.  For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.

A valid parentheses string S is primitive if it is nonempty, and there does not exist a way to split it into S = A+B, with A and B nonempty valid parentheses strings.

Given a valid parentheses string S, consider its primitive decomposition: S = P_1 + P_2 + ... + P_k, where P_i are primitive valid parentheses strings.

Return S after removing the outermost parentheses of every primitive string in the primitive decomposition of S.

LeetCode: 1021. Remove Outermost Parentheses
*/

var removeOuterParentheses = function(S) {
    let i = 0; 
    let str = ""
    for(let c of S){
        if(c === "("){
            i++;
            if(i > 1) str += c;
        }else if(c === ")"){
            if(i > 1) str += c;
            i--;
        }
    }
    return str;
};
removeOuterParentheses("(()())(())(()(()))")
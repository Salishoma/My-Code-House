/*
You are given a string s that consists of lower case English letters and brackets. 

Reverse the strings in each pair of matching parentheses, starting from the innermost one.

Your result should not contain any brackets.

LeetCode: 1190. Reverse Substrings Between Each Pair of Parentheses
*/

var reverseParentheses = function(s) {
    if(!s) return ""
    if(!s.includes("(") || !s.includes(")")) return s
    const index = [];
    let split = s.split('');
    for(let i = 0; i < split.length; i++){
        if(split[i] === '('){
            index.push(i);
        }else if(split[i] === ')'){
            const j = index.length - 1;
            const str1 = split.slice(index[j], i).reverse();
            const str2 = split.slice(i)
            split = split.slice(0, index[j]).concat(str1, str2)
            index.pop()
        }
    }
    return split.join("").replace(/\)/g,"").replace(/\(/g,"");
};
reverseParentheses("(u(love)i)")

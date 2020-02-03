/*
Balanced strings are those who have equal quantity of 'L' and 'R' characters.

Given a balanced string s split it in the maximum amount of balanced strings.

Return the maximum amount of splitted balanced strings.

LeetCode: 1221. Split a String in Balanced Strings
*/

var balancedStringSplit = function(s) {
    let count = 0, countR = 0;
    for(let c of s){
        if(c === "R") countR++;
        else countR--;
        if(countR === 0){
            count++;
        }
    }
    return count;
};
balancedStringSplit("RLRRLLRLRL")
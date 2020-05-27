/*
Given a string S and a character C, return an array of integers representing the shortest distance from the character C in the string.

LeetCode: 821. Shortest Distance to a Character
*/

var shortestToChar = function(S, C) {
    let prev = -Infinity
    const indices = S.split('').map((el,i) => i).filter(i => S[i] ===C);
    const res = [];
    let j = 0
    for(let i = 0; i < S.length; i++){
        if(i > indices[j] && j < indices.length - 1){
            prev = indices[j]
            j++;
        }
        res[i] = Math.min(i - prev, indices[j] - i);
        if(res[i] < 0) res[i] = Math.abs(res[i])
    }     
    return res;
};
shortestToChar("aaba","b")
// shortestToChar("loveleetcode", 'e')
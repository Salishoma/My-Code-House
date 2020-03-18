/*
A query word matches a given pattern if we can insert lowercase letters to the pattern word so that it equals the query. (We may insert each character at any position, and may insert 0 characters.)

Given a list of queries, and a pattern, return an answer list of booleans, where answer[i] is true if and only if queries[i] matches the pattern.

LeetCode: 1023. Camelcase Matching
*/

var camelMatch = function(queries, pattern) {
    let res = [];
    for(let q of queries){
        let j = 0;
        for(let i = 0; i < q.length; i++){
            if(q[i] === pattern[j]) j++;
            else{
                if(q[i] !== q[i].toLowerCase()){
                    res.push(false);
                    break;
                } 
            }
            if(q.length >= pattern.length && i === q.length - 1 && j === pattern.length) res.push(true);
            else if(i === q.length - 1 && j !== pattern.length) res.push(false);
        }
    }
    return res;
};
// camelMatch(["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], "FB")
camelMatch(["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], "FoBaT")
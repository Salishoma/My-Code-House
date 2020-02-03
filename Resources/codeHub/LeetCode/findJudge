/*
In a town, there are N people labelled from 1 to N.  There is a rumor that one of these people is secretly the town judge.

If the town judge exists, then:

The town judge trusts nobody.
Everybody (except for the town judge) trusts the town judge.
There is exactly one person that satisfies properties 1 and 2.
You are given trust, an array of pairs trust[i] = [a, b] representing that the person labelled a trusts the person labelled b.

If the town judge exists and can be identified, return the label of the town judge.  Otherwise, return -1.

LeetCode: 997. Find the Town Judge
*/

var findJudge = function(N, trust) {
    if(trust.length === 0 && N === 1) return 1;
    let set = new Set();
    let seen = {};
    for(let i = 0; i < trust.length; i++){
        set.add(trust[i][0]);
    }
    for(let i = 0; i < trust.length; i++){
        if(!set.has(trust[i][1])){
            seen[trust[i][1]] = (seen[trust[i][1]] || 0) + 1;
            if(seen[trust[i][1]] === N - 1) return trust[i][1]
        }
    }
    return -1;
};
findJudge(2,[[1,2]])
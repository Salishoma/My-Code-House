/*
Given a list of dominoes, dominoes[i] = [a, b] is equivalent to dominoes[j] = [c, d] if and only if either (a==c and b==d), or (a==d and b==c) - that is, one domino can be rotated to be equal to another domino.

Return the number of pairs (i, j) for which 0 <= i < j < dominoes.length, and dominoes[i] is equivalent to dominoes[j].

LeetCode: 1128. Number of Equivalent Domino Pairs
*/


var numEquivDominoPairs = function(dominoes) {
    let count = 0;
    let seen = {};
    let n = dominoes.length;
    for(let i = 0; i < n; i++){
        if(dominoes[i][1] < dominoes[i][0]){
           dominoes[i] = dominoes[i].reverse()
       }
        dominoes[i] = dominoes[i].join('');
        seen[dominoes[i]] = (seen[dominoes[i]] || 0) + 1;
    }
    let arr = Object.values(seen);
    n = arr.length;
    for(let i = 0; i < n; i++){
        count += arr[i] * (arr[i] - 1) / 2
    }
    return count;
};
numEquivDominoPairs([[1,2],[2,1],[3,4],[5,6]])
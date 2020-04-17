/*
In a special ranking system, each voter gives a rank from highest to lowest to all teams participated in the competition.

The ordering of teams is decided by who received the most position-one votes. If two or more teams tie in the first position, we consider the second position to resolve the conflict, if they tie again, we continue this process until the ties are resolved. If two or more teams are still tied after considering all positions, we rank them alphabetically based on their team letter.

Given an array of strings votes which is the votes of all voters in the ranking systems. Sort all teams according to the ranking system described above.

Return a string of all teams sorted by the ranking system.

LeetCode: 1366. Rank Teams by Votes
*/

var rankTeams = function(votes) {
    const seen = {};
    for(let vote of votes[0]) seen[vote] = Array(votes[0].length).fill(0);
    for(let i = 0; i < votes[0].length; i++){
        seen[votes[0][i]][i] = 1;
        for(let j = 1; j < votes.length; j++){
            seen[votes[j][i]][i] = (seen[votes[j][i]][i] || 0) + 1;
        }
    }
    var sortable = [];
    for (let letter in seen) {
        sortable.push([letter, seen[letter]]);
    }
    const N = sortable.length;
    sortable.sort((a, b) => {
        for (let i = 0; i < N; ++i) {
            if (a[1][i] === b[1][i]){
                if(i === N - 1) return a[0].localeCompare(b[0])
                continue;
            }
            return  b[1][i] - a[1][i];            
      }
    })
    let str = '';
    for (var s of sortable) str += s[0];
    return str
};
rankTeams(["ABC","ACB","ABC","ACB","ACB"])
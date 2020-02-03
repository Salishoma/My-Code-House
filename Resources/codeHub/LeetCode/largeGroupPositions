/*
In a string S of lowercase letters, these letters form consecutive groups of the same character.

For example, a string like S = "abbxxxxzyy" has the groups "a", "bb", "xxxx", "z" and "yy".

Call a group large if it has 3 or more characters.  We would like the starting and ending positions of every large group.

The final answer should be in lexicographic order.

LeetCode: 830. Positions of Large Groups
*/

var largeGroupPositions = function(S) {
    let max  = 0;
    let arr = [];
    let str;
    let map = new Map();
    for(let i = 0; i < S.length; i++){
        map.set(S[i], (map.get(S[i]) || 0) + 1);
        if(S[i] !== S[i + 1]){
            if(map.get(S[i]) >= 3){
                arr.push([i - map.get(S[i]) + 1, i])
            }
            map.delete(S[i]);
        }
    }
    return arr
};
largeGroupPositions("abbxxxxzzy")

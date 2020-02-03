/*
In a string S of lowercase letters, these letters form consecutive groups of the same character.

For example, a string like S = "abbxxxxzyy" has the groups "a", "bb", "xxxx", "z" and "yy".

Call a group large if it has 3 or more characters.  We would like the starting and ending positions of every large group.

The final answer should be in lexicographic order.

LeetCode: 830. Positions of Large Groups
*/

var largeGroupPositions = function(S) {
    let arr = [];
    let count = 1
    for(let i = 0; i < S.length; i++){
        if(S[i] === S[i + 1]) count++;
        else{
            if(count >= 3){
                arr.push([i - count + 1, i])
            }
            count = 1;
        }
    } 
    return arr
};
largeGroupPositions("abcdddeeeeaabbbcd")
/*
Given a string S, check if the letters can be rearranged so that two characters that are adjacent to each other are not the same.

If possible, output any possible result.  If not possible, return the empty string.

LeetCode: 767. Reorganize String
*/

var reorganizeString = function(S) {
    const map = {}
    for(let s of S){
        map[s] = (map[s] || 0) + 1;
    }
    const sortArr = Object.keys(map).sort((a, b) => map[b] - map[a]);
    const n = S.length;
    if(2 * map[sortArr[0]] > n + 1) return "";
    let idx = 0;
    const arr = []
    for(let s of sortArr){
        for(let i = 0; i < map[s]; i++){
            if(idx >= n) idx = 1;
            arr[idx] = s;
            idx += 2
        }
    }
    return arr.join('');
};
reorganizeString("abbabbaaab")
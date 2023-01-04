/*
Given a list of strings, you need to find the longest uncommon subsequence among them. The longest uncommon subsequence is defined as the longest subsequence of one of these strings and this subsequence should not be any subsequence of the other strings.

A subsequence is a sequence that can be derived from one sequence by deleting some characters without changing the order of the remaining elements. Trivially, any string is a subsequence of itself and an empty string is a subsequence of any string.

The input will be a list of strings, and the output needs to be the length of the longest uncommon subsequence. If the longest uncommon subsequence doesn't exist, return -1.

LeetCode: 522. Longest Uncommon Subsequence II
*/

var findLUSlength = function(strs) {
    let seen = {};
    let arr = [];
    let max = -1;
    let index = -1;
    for(let i = 0; i < strs.length; i++){
        seen[strs[i]] = (seen[strs[i]] || 0) + 1;
        if(seen[strs[i]] > 1){
            if(max < strs[i].length){
                max = strs[i].length
                index = i;
            }
        }
    }
    if(index === -1) {
        strs.forEach(el =>{
            if(el.length > max) max = el.length;
        })
        return max;
    }
    for(let i = 0; i < strs.length; i++){
        if(seen[strs[i]] === 1) arr.push(strs[i]);
    }
    max = -1;
    for(let i = arr.length - 1; i >= 0; i--){
        let l = arr[i];
        let d = 0;
        for(let j = 0; j < strs[index].length; j++){
            if(strs[index][j] === l[d]){
                d++;
            }
        }
        if(d === l.length){
            let temp = arr[i];
            arr[i] = arr[arr.length - 1];
            arr[arr.length - 1] = temp;
            arr.pop();
        }
    }
    arr.forEach(el =>{
        if(el.length > max) max = el.length;
    })
    return max
};
// findLUSlength(["aaa","aaa","aa"])
findLUSlength(["aabbcc", "aabbcc","c","e","aabbcd"])
/*
Given a list of strings, you need to find the longest uncommon subsequence among them. The longest uncommon subsequence is defined as the longest subsequence of one of these strings and this subsequence should not be any subsequence of the other strings.

A subsequence is a sequence that can be derived from one sequence by deleting some characters without changing the order of the remaining elements. Trivially, any string is a subsequence of itself and an empty string is a subsequence of any string.

The input will be a list of strings, and the output needs to be the length of the longest uncommon subsequence. If the longest uncommon subsequence doesn't exist, return -1.

LeetCode: 522. Longest Uncommon Subsequence II
*/

var findLUSlength = function(strs) {    
    let max = -1;
    for(let i=0; i<strs.length; i++){
        let unCom = true;
        for(let j=0; j<strs.length; j++){
            if(i==j){
               continue;
            }
            if( i!=j && (isSub(strs[i], strs[j])) ){
                 unCom=false;
            }
        }
        if(unCom){
            max = Math.max(max, strs[i].length);
        }
    }
    return max;    
};
let isSub =  function(str1, str2){
    let i=0;
    for(let c of str2.split('')){
        if( c==str1.charAt(i)){
           i++;
        }
    }
    return i==str1.length ;
}
/*
To some string S, we will perform some replacement operations that replace groups of letters with new ones (not necessarily the same size).

Each replacement operation has 3 parameters: a starting index i, a source word x and a target word y.  The rule is that if x starts at position i in the original string S, then we will replace that occurrence of x with y.  If not, we do nothing.

For example, if we have S = "abcd" and we have some replacement operation i = 2, x = "cd", y = "ffff", then because "cd" starts at position 2 in the original string S, we will replace it with "ffff".

Using another example on S = "abcd", if we have both the replacement operation i = 0, x = "ab", y = "eee", as well as another replacement operation i = 2, x = "ec", y = "ffff", this second operation does nothing because in the original string S[2] = 'c', which doesn't match x[0] = 'e'.

All these operations occur simultaneously.  It's guaranteed that there won't be any overlap in replacement: for example, S = "abc", indexes = [0, 1], sources = ["ab","bc"] is not a valid test case.

LeetCode: 833. Find And Replace in String
*/

var findReplaceString = function(S, indexes, sources, targets) {
    let j = 0;
    let k = 0;
    let s = ""; 
    let arr = [];
    while(j < indexes.length){
        let k = indexes[j]
        if(sources[j] === S.slice(k, k + sources[j].length)){
            arr[k] = j
        }
        j++
    }
    j = 0
    while(j < S.length){
        if(arr[j] >= 0){
            s += targets[[arr[j]]];
            j += sources[arr[j]].length;
        }else{
            s += S[j];
            j++;
        }
    }
    return s
};
findReplaceString("abcd", [0,2], ["a","cd"], ["eee","ffff"])
/*
Given a string s. Return all the words vertically in the same order in which they appear in s.
Words are returned as a list of strings, complete with spaces when is necessary. (Trailing spaces are not allowed).
Each word would be put on only one column and that in one column there will be only one word.

LeetCode: 1324. Print Words Vertically
*/

var printVertically = function(s) {
    let arr = s.split(' '); 
    let max = 0;
    for(let c of arr){
        max = Math.max(c.length, max);
    }
    let res = [];
    for(let i = 0; i < max; i++){
        let str = arr[0][i]
        if(arr[0][i] === undefined) str = " ";
        for(let j = 1; j < arr.length; j++){
            if(arr[j][i] === undefined) str += " ";
            else str += arr[j][i];
        }
        
        res.push(str.trimRight())
    }
    return res;
};
printVertically("TO BE OR NOT TO BE")
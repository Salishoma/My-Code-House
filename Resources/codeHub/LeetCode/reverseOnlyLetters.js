/*
Given a string S, return the "reversed" string where all characters that are not a letter stay in the same place, and all letters reverse their positions.

LeetCode: 917. Reverse Only Letters
*/

var reverseOnlyLetters = function(S) {
    let s = S.replace(/[^a-z]/ig,"");
    let str = "";
    let n = S.length;
    let j = s.length - 1;
    for(let i = 0; i < n; i++){
        if((S[i].charCodeAt(0) >= 97 && S[i].charCodeAt(0) <= 122)
        || (S[i].charCodeAt(0) >= 65 && S[i].charCodeAt(0) <= 90)){
            str += s[j];
            j--;
        }else{
            str += S[i];
        }
    }
    return str;
};
reverseOnlyLetters("a-bC-dEf-ghIj")
/*
Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

LeetCode: 844. Backspace String Compare
*/

var backspaceCompare = function(S, T) {
    let arrS = S.split('');
    let arrT = T.split('');
    let count = 0;
    for(let i = S.length - 1; i >= 0; i--){
        if(S[i] === "#"){
            delete arrS[i]
            count++
        }else{
            if(count > 0){
                delete arrS[i]
                count--
            }
        }
    }
    count = 0;
    for(let i = T.length - 1; i >= 0; i--){
        if(T[i] === "#"){
            delete arrT[i]
            count++
        }else{
            if(count > 0){
                delete arrT[i]
                count--
            }
        }
    }
    return arrS.join('') === arrT.join('')
};
backspaceCompare("ab#c", "ad#c")

/*
Given two strings A and B of lowercase letters, return true if and only if we can swap two letters in A so that the result equals B.

LeetCode: 859. Buddy Strings
*/

var buddyStrings = function(A, B) {
    if(A.length <= 1) return false;
    if(A.length !== B.length) return false;
    let seen = {}
    let count = 0;
    let first, second;
    for(let i = 0; i < A.length; i++){
        if(A[i] !== B[i]){
            count++;
            if(count === 1) first = i;
            if(count === 2) second = i;
        }
        seen[A[i]] = (seen[A[i]] || 0) + 1;
    }
    let j = A.length - 1;
    if(count === 0){
        if(new Set(A).size === 1) return true;
        let count = 0;
        for(let i = 0; i < A.length; i++){
            if(seen[A[i]] >= 2){
                count++;
                delete seen[A[i]] 
            }
            if(count >= 2) return true;
        }
        return false;
    }
    if(count === 2){
        return A[first] === B[second] && B[first] === A[second]
    }
    return false
};
buddyStrings("aaaaaaabc", "aaaaaaacb")
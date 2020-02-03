/*
We are given two sentences A and B.  (A sentence is a string of space separated words.  Each word consists only of lowercase letters.)

A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

Return a list of all uncommon words. 

You may return the list in any order.

LeetCode: 884. Uncommon Words from Two Sentences
*/

var uncommonFromSentences = function(A, B) {
    let arr1 = (A + " " + B).split(' ');
    let seen = {};
    let arr = [];
    for(let i = 0; i < arr1.length; i++){
        seen[arr1[i]] = (seen[arr1[i]] || 0) + 1;
    }
    for(let i = 0; i < arr1.length; i++){
        if(seen[arr1[i]] === 1) arr.push(arr1[i]);
    }
    return arr;
};
uncommonFromSentences("this apple is sweet", "this apple is sour")
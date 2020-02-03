/*
Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

LeetCode: 557. Reverse Words in a String III
*/

var reverseWords = function(s) {
    s = s.trim()
    let arr = [];
    let str = ""
    for(let i = 0; i < s.length; i++){
        if(s[i] === " ") str += " ";
        else if(s[i + 1] ===" "){
            arr.push(s[i]);
            str +=arr.reverse().join('');
            arr = [];
        }else arr.push(s[i]);
    }
    if(arr.length > 0) str += arr.reverse().join('');
    return str.trim()
};
reverseWords()
/*
Given a string s formed by digits ('0' - '9') and '#' . We want to map s to English lowercase characters as follows:

Characters ('a' to 'i') are represented by ('1' to '9') respectively.

Characters ('j' to 'z') are represented by ('10#' to '26#') respectively. 

Return the string formed after mapping.

It's guaranteed that a unique mapping will always exist.

LeetCode: 1309. Decrypt String from Alphabet to Integer Mapping
*/

var freqAlphabets = function(s) {
    let str = ""
   for(let i = 0; i < s.length; i++){
       if(s[i + 2] === "#"){
           str += String.fromCharCode(96 + 10 * s[i] + parseInt(s[i + 1]));
           i += 2;
       }else str += String.fromCharCode(96 + parseInt(s[i]))
   }
    return str;
};
freqAlphabets("10#11#12")
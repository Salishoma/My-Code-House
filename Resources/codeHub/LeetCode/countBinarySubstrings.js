/*
Given a string s, count the number of non-empty (contiguous) substrings that have the same number of 0's and 1's, and all the 0's and all the 1's in these substrings are grouped consecutively.

Substrings that occur multiple times are counted the number of times they occur.

LeetCode: 696. Count Binary Substrings
*/

var countBinarySubstrings = function(s) {
    let count0 = 0, count1 = 0, count = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] === "0"){
            count0++;
            if(count1 > 0){
                count++;
                count1--
            }
            if(s[i + 1] !== "0") count1 = 0;
        }else{
            count1++;
            if(count0 > 0){
                count++;
                count0--
            }
            if(s[i + 1] !== "1") count0 = 0;
        }
    }
    return count
};
countBinarySubstrings("00110011")
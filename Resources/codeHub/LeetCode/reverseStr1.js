/*
Given a string and an integer k, you need to reverse the first k characters for every 2k characters counting from the start of the string. If there are less than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.

LeetCode: 541. Reverse String II
*/

var reverseStr = function(s, k) {
    let newString = "";
    let temp = "";
    for (let i = 0; i < Math.ceil(s.length/k); i++){
        temp = s.substring(i*k,i*k+k);
        if ( i % 2 === 0){
            temp = temp.split("").reverse().join("");
        } 
        newString += temp
    }

    return newString;
};
reverseStr("abcdefg", 2)
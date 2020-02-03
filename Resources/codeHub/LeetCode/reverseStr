/*
Given a string and an integer k, you need to reverse the first k characters for every 2k characters counting from the start of the string. If there are less than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.

LeetCode: 541. Reverse String II
*/

var reverseStr = function(s, k) {
    let arr = [];
    let turn = true;
    let count = 0;
    let str = "";
    for(let i = 0; i < s.length; i++){
        if(turn){
            arr.push(s[i]);
            count++;
            if(count === k){
                str += arr.reverse().join('');
                turn = !turn;
                arr = [];
            }
        }else{
            arr.push(s[i]);
            count--;
            if(count === 0){
                str += arr.join('');
                turn = !turn;
                arr = [];
            }
        }
    }
    if(turn && count !== 0) str += arr.reverse().join('');      
    else str += arr.join('');
    return str;
};
reverseStr("abcdefg", 2)
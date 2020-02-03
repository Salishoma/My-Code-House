/*
Write a function that reverses a string. The input string is given as an array of characters char[].

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

You may assume all the characters consist of printable ascii characters.

LeetCode: 344. Reverse String
*/

var reverseString = function(s) {
    let j = s.length - 1;
    let mid = Math.floor(j / 2);
    for(let i = 0; i <= mid; i++){
        let temp = s[i];
        s[i] = s[j];
        s[j] = temp;
        j--
    }
};
reverseString(["h","e","l","l","o"])
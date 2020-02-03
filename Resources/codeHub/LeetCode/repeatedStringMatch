/*
Given two strings A and B, find the minimum number of times A has to be repeated such that B is a substring of it. If no such solution, return -1.

For example, with A = "abcd" and B = "cdabcdab".

Return 3, because by repeating A three times (“abcdabcdabcd”), B is a substring of it; and B is not a substring of A repeated two times ("abcdabcd").

LeetCode: 686. Repeated String Match
*/

var repeatedStringMatch = function(A, B) {
    let l = A.length;
    let C = A
    if(A.length < B.length) A = A.repeat(Math.ceil(B.length / A.length));
    if(A.includes(B)) return A.length / l;
    else{
        A = A + C;
        if(A.includes(B)) return A.length / l;
    }
    return -1;
};
repeatedStringMatch("abcd", "cdabcdab")
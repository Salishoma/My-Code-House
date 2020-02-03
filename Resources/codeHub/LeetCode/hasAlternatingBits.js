/*
Given a positive integer, check whether it has alternating bits: namely, if two adjacent bits will always have different values.

LeetCode: 693. Binary Number with Alternating Bits
*/

var hasAlternatingBits = function(n) {
    let rem;
    let rem1;
    while(n !== 0){
        rem = n % 2;
        if(rem === rem1) return false;
        rem1 = rem;
        n = Math.floor(n / 2);
    }
    return true;
};
hasAlternatingBits(5)
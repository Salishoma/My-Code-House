/*
Given a 32-bit signed integer, reverse digits of an integer.

LeetCode: 7. Reverse Integer
*/

var reverse = function(x) {
    let rev = 0;
    let y = x > 0 ? x : -x;
    while(y > 0){
        let rem = y % 10;
        y = Math.floor(y / 10);
        rev = rev * 10 + rem;
    }
    if(rev > 2 ** 31){
        if(x < 0) return 0;
    }
    if(rev > 2 ** 31 - 1) return 0;
    return x >= 0 ? rev : -rev
};
reverse(123)
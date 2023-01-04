/*
Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.

Note:
The given integer is guaranteed to fit within the range of a 32-bit signed integer.
You could assume no leading zero bit in the integer’s binary representation.

LeetCode: 476. Number Complement
*/

var findComplement = function(num) {
    let str = "";
    let n = num;
    while(n > 0){
        if(n % 2 === 0) str = 1 + str;
        else str = 0 + str;
        n = Math.floor(n / 2);
    }
    
    return parseInt(str, 2);
};
findComplement(20)
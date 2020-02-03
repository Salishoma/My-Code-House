/*
Every non-negative integer N has a binary representation.  For example, 5 can be represented as "101" in binary, 11 as "1011" in binary, and so on.  Note that except for N = 0, there are no leading zeroes in any binary representation.

The complement of a binary representation is the number in binary you get when changing every 1 to a 0 and 0 to a 1.  For example, the complement of "101" in binary is "010" in binary.

For a given number N in base-10, return the complement of it's binary representation as a base-10 integer.

LeetCode: 1009. Complement of Base 10 Integer
*/

var bitwiseComplement = function(N) {
    let bin = N.toString(2).split('');
    for(let i = 0; i < bin.length; i++){
        bin[i] === "1" ?  bin[i] = "0" :  bin[i] = "1";
    }
    return parseInt(bin.join(''), 2).toString(10)
};
bitwiseComplement(5)
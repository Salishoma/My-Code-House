/*
Given two integers L and R, find the count of numbers in the range [L, R] (inclusive) having a prime number of set bits in their binary representation.

(Recall that the number of set bits an integer has is the number of 1s present when written in binary. For example, 21 written in binary is 10101 which has 3 set bits. Also, 1 is not a prime.)

LeetCode: 762. Prime Number of Set Bits in Binary Representation
*/

var countPrimeSetBits = function(L, R) {
    const prime = new Set([2,3,5,7,11,13,17,19]);
    let res = 0;
    for(let i = L; i <= R; i++){
        let count = 0;
        let num = i;
        while(num){
            let rem = num % 2;
            num = Math.floor(num / 2);
            if(rem === 1) count++;
        }
        if(prime.has(count)) res++;
    }
    return res;
};
countPrimeSetBits(6,10)
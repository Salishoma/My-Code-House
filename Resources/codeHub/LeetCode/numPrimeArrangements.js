/*
Return the number of permutations of 1 to n so that prime numbers are at prime indices (1-indexed.)

(Recall that an integer is prime if and only if it is greater than 1, and cannot be written as a product of two positive integers both smaller than it.)

Since the answer may be large, return the answer modulo 10^9 + 7.

LeetCode: 1175. Prime Arrangements
*/

var numPrimeArrangements = function(n) {
    if(n <= 2) return 1;
    if(n === 3) return 2;
    const arr = [2,3]
    let countPrime = 2;
    for(let i = 4; i <= n; i++){
        let prime = true;
        for(let j = 0; j < arr.length; j++){
            if(arr[j] * arr[j] > i) break;
            if(i % arr[j] === 0){
                prime = false;
                break;
            }
        }
        if(prime){
            arr.push(i)
            countPrime++;
        }
    }
    let count = n - countPrime; 
    let prod = 1;
    for(let i = 2; i <= Math.max(count, countPrime); i++){
        if(i <= count) prod = (prod * i) % (Math.pow(10, 9) + 7);
        if(i <= countPrime){
            prod = (prod * i) % (Math.pow(10, 9) + 7);
        }
    }
    return prod
};
numPrimeArrangements(16)
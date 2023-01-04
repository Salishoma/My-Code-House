/*
Given an integer number n, return the difference between the product of its digits and the sum of its digits.

LeetCode: 1281. Subtract the Product and Sum of Digits of an Integer
*/

var subtractProductAndSum = function(n) {
    let sum = 0, prod = 1;
    while(n >= 1){
        let rem = n % 10;
        n = Math.floor(n / 10);
        prod *= rem;
        sum += rem;
    }
    return prod - sum;
};
subtractProductAndSum(4421)
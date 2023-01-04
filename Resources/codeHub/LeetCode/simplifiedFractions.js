/*
Given an integer n, return a list of all simplified fractions between 0 and 1 (exclusive) such that the denominator is less-than-or-equal-to n. The fractions can be in any order.

LeetCode: 1447. Simplified Fractions
*/

var simplifiedFractions = function(n) {
    let arr = [];
    let num = "1";
    let den = "2";
    while(num < n){
        if(gcd(num, den)){
            ++num;
            if(num > den){
                num = "1";
                ++den;
            }
        }
        else if(num < den){
            arr.push(`${num}/${den}`);
            ++num;
        }else if(num === den && den < n){
            num = "1";
            ++den;
        }
    }
    return arr;
};
const gcd = (x, y) => {
    if(y === 1) return false;
    if(x % y === 0) return true;
    return gcd(y, x % y)
}
simplifiedFractions(12)
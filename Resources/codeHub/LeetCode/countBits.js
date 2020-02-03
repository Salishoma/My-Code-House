/*
Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.

LeetCode: 338. Counting Bits
*/

var countBits = function(num){
    let ans = Array(num + 1).fill(0);
    for (let i = 1; i < num + 1; i++) {
        if (i % 2 == 0) ans[i] = ans[i / 2];
        else ans[i] = ans[Math.floor(i / 2)] + 1;
    }
    return ans;
}
countBits(5)
/*
Write a program to find the n-th ugly number.
Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.

LeetCode: 264. Ugly Number II
*/

const uglys = [1];
var nthUglyNumber1 = function(n) {
  let i = 0;
  let j = 0;
  let k = 0;
  for (let index = 1; index < n; index++) {
    const num2 = uglys[i] * 2;    
    const num3 = uglys[j] * 3;    
    const num5 = uglys[k] * 5;   
    uglys[index] = Math.min(num2, num3, num5);
    if (uglys[index] === num2) i++;
    if (uglys[index] === num3) j++;
    if (uglys[index] === num5) k++;
  }
};
nthUglyNumber1(1690);
var nthUglyNumber = n => uglys[n - 1];
nthUglyNumber(10)
/*
Write a program to check whether a given number is an ugly number.

Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.

LeetCode: 263. Ugly Number
*/

var isUgly = function(num) {
    let divide = true;
    while(divide === true){
      if(num % 2 === 0 || num % 3 === 0 || num % 5 === 0){
          if(num % 2 === 0) num /= 2;
          if(num % 3 === 0) num /= 3;
          if(num % 5 === 0) num /= 5;
          divide = true;
      }else divide = false;
  }
  if(num === 1) return true;
  return false;  
};
isUgly(10);
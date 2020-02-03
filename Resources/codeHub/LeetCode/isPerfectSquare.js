/*
Given a positive integer num, write a function which returns True if num is a perfect square else False.

Note: Do not use any built-in library function such as sqrt.

LeetCode: 367. Valid Perfect Square
*/
var isPerfectSquare = function(num) {
    if(num === 1) return true;
    let n = Math.floor(num / 2);
    while(true){
        if(n * n === num) return true;
        else if(n * n > num){
            n = Math.floor(n / 2);
        }else{
            n += 1;
            if(n * n > num) return false;
        }
    }
};
isPerfectSquare(16)
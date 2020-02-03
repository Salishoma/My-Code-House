/*
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

LeetCode: 9. Palindrome Number
*/

var isPalindrome = function(x) {
    let rev = 0;
    if(x < 0 || (x % 10 === 0 && x !== 0)) return false;   
    while(x > rev){
        rev = 10 * rev + x % 10;;
        x = Math.floor(x / 10);      
    } 
    return x === rev  ||  x === Math.floor(rev / 10)
};
isPalindrome(121)
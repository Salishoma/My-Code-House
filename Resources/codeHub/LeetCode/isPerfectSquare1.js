/*
Given a positive integer num, write a function which returns True if num is a perfect square else False.

Note: Do not use any built-in library function such as sqrt.

LeetCode: 367. Valid Perfect Square
*/

var isPerfectSquare = function(num) {
    if (num === 1) return true;
    
    let left = 1;
    let right = num;
    
    while (left < right) {
        let mid = ~~(left + (right - left)/2);
        
        // think first about the case to go left
        if (mid >= num / mid) {
            right = mid;
        }
        else {
            left = mid + 1;
        }
    }
    return left === num / left;
};
/*
Implement int sqrt(int x).

Compute and return the square root of x, where x is guaranteed to be a non-negative integer.

Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

LeetCode: 69. Sqrt(x)
*/

var mySqrt = function(x) {
    if(x < 2){
            return x;
    }
    let l = 1;
    let r = Math.floor(x / 2);
    let res = l;
    while(l <= r){
        let mid =  Math.floor((l + r) / 2);
        if(mid * mid === x){
            return mid;
        }
        if(mid * mid > x){
            r = mid - 1;
        }else{
            res = mid;
            l = mid + 1;
        }
    }
    return res;
}
mySqrt(4)
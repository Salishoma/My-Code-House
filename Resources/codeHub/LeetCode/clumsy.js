/*
Normally, the factorial of a positive integer n is the product of all positive integers less than or equal to n.  For example, factorial(10) = 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1.

We instead make a clumsy factorial: using the integers in decreasing order, we swap out the multiply operations for a fixed rotation of operations: multiply (*), divide (/), add (+) and subtract (-) in this order.

For example, clumsy(10) = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1.  However, these operations are still applied using the usual order of operations of arithmetic: we do all multiplication and division steps before any addition or subtraction steps, and multiplication and division steps are processed left to right.

Additionally, the division that we use is floor division such that 10 * 9 / 8 equals 11.  This guarantees the result is an integer.

Implement the clumsy function as defined above: given an integer N, it returns the clumsy factorial of N.

LeetCode: 1006. Clumsy Factorial
*/
var clumsy = function(N) {
    const arr = [];
    let first = true;
    let res = 1;
    let n = 0;
    while(N > 0){
        if(n < 2){
            res *= N
        }else if(n < 3){
            if(first){
                res = Math.floor(res / N);
                first = false;
            }
            else res = -1 * Math.floor(Math.abs(res) / N)
        }else{
            res += N;
            arr.push(res);
            res = -1;
            n = -1;
        }
        n++;
        N--;
    }
    if(n !== 0) arr.push(res);
    let diff = arr[0];
    for(let i = 1; i < arr.length; i++){
        diff += arr[i];
    }
    return diff;
};
clumsy(10)
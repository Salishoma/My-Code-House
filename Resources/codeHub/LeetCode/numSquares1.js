/*
Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

LeetCode: 279. Perfect Squares
*/

const squares = { 0: 0, 1: 1 };
var numSquares = function (n) {
    let min = Number.MAX_VALUE;
    for (let i = Math.floor(Math.sqrt(n)); i > 0; i--) {
        let remainder = n - i * i;
        min = Math.min(min, squares[remainder] + 1 || numSquares(remainder) + 1);
    }
    squares[n] = min;
    return squares[n];
}
numSquares(15)
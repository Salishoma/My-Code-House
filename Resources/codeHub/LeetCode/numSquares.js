/*
Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

LeetCode: 279. Perfect Squares
*/

const numSquares = n => {
  const visited = new Set();
  const queue = [[n, 1]];
  while (queue.length) {
    const [curNum, squaresSumCount] = queue.shift();
    const curNumSqrt = Math.floor(Math.sqrt(curNum));
    if (curNum === curNumSqrt * curNumSqrt) {
      return squaresSumCount;
    }
    for (let i = curNumSqrt; i > 0 ; i--) {
      const remainder = curNum - i * i;
      if (!visited.has(remainder)) {
        queue.push([remainder, squaresSumCount + 1]);
        visited.add(remainder);
      }
    }
  }
};
numSquares(12)
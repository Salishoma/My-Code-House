/*
Given two integer arrays A and B, return the maximum length of an subarray that appears in both arrays.

LeetCode: 718. Maximum Length of Repeated Subarray
*/

var findLength = function(A, B) {
  const m = A.length;
  const n = B.length;
  let max = 0;
  let dp = new Array(n + 1).fill(0);
  for (let i = 1; i <= m; i++) {
    const next = new Array(n + 1).fill(0);
    for (let j = 1; j <= n; j++) {
      next[j] = A[i - 1] === B[j - 1] ? dp[j - 1] + 1 : 0;
      max = Math.max(max, next[j]);
    }
    dp = next;
  }
  return max;
};
findLength([1,2,3,2,1], [3,2,1,4,7])
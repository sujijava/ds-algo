"use strict";

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const dp = [];

  for (let i = 0; i < m; i++) {
    dp.push([]);
  }

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (r === 0 || c === 0) {
        dp[r][c] = 1;
      } else {
        dp[r][c] = dp[r - 1][c] + dp[r][c - 1];
      }
    }
  }
  return dp[m - 1][n - 1];
};
console.log(uniquePaths(2, 3));

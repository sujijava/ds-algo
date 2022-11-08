/**
 * @param {number} n
 * @return {number}
 */

// top down
/** 
var climbStairs = function (n) {
  if (n === 0 || n === 1 || n === 2) {
    return n;
  }
  return climbStairs(n - 2) + climbStairs(n - 1);
};
*/

// bottom up
var climbStairs = function (n) {
  if (n === 0 || n === 1 || n === 2) {
    return n;
  }

  // n = 3
  let res = 0;
  let prev = 2;
  let prevP = 1;

  for (let i = 3; i <= n; i++) {
    res = prev + prevP;
    prevP = prev;
    prev = res;
  }

  return res;
};

console.log(climbStairs(5));

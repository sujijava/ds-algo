/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  if (n == 0) return 0;
  let ans = 0;
  for (let i = 0; i < 32; i++) {
    ans = (ans << 1) | (n & 1);
    n = n >> 1;
  }
  return ans;
};

console.log(reverseBits(parseInt("00000010100101000001111010011100", 2)));

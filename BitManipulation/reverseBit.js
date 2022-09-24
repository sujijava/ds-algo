/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  if (n == 0) return 0;

  let result = 0;

  for (let i = 0; i < 32; i++) {
    result = (result << 1) + ((n >> i) & 1);
  }

  return result;
};

console.log(reverseBits(parseInt("00000010100101000001111010011100", 2)));

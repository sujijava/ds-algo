/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let curMax = 1;
  let curMin = 1;
  let res = nums[0];

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    const temp = curMax * n;
    curMax = Math.max(n * curMax, n * curMin, n);
    curMin = Math.min(temp, n * curMin, n);
    res = Math.max(curMax, res);
  }

  return res;
};

const arr = [-2, 3, -4];
console.log(maxProduct(arr));

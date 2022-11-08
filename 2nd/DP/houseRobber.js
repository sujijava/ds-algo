/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let prevP = 0;
  let prev = nums[0];
  let res = nums[0];

  for (let i = 1; i < nums.length; i++) {
    console.log(nums[i]);
    res = Math.max(prevP + nums[i], prev);
    prevP = prev;
    prev = res;
  }
  return res;
};

const nums = [1, 2, 3, 1];
console.log(rob(nums));

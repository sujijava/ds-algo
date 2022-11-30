/**
 * @param {number[]} nums
 * @return {number}
 */

const rob = (nums) => {
  if (nums.length === 1) {
    return nums[0];
  }
  if (nums.length === 2) {
    return Math.max(nums[0], nums[1]);
  }
  const numsA = nums.slice(1, nums.length);
  const numsB = nums.slice(0, nums.length - 1);

  return Math.max(basicRob(numsA), basicRob(numsB));
};

var basicRob = function (nums) {
  let prevP = 0;
  let prev = nums[0];
  let res = nums[0];

  for (let i = 1; i < nums.length; i++) {
    res = Math.max(prevP + nums[i], prev);
    prevP = prev;
    prev = res;
  }
  return res;
};

const nums = [1, 3, 1, 3, 100];

console.log(rob(nums));

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums = nums.sort(function (a, b) {
    return a - b;
  });
  const res = new Set();

  if (nums.length === 0) {
    return [];
  }

  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        res.add([nums[i], nums[j], nums[k]]);
        j++;
        k--;
      } else if (sum < 0) {
        j++;
      } else if (sum > 0) {
        k--;
      }
    }
  }
  return [...res];
};

const nums = [-1, 0, 1, 2, -1, -4];
// Output: [[-1,-1,2],[-1,0,1]]

console.log(threeSum(nums));

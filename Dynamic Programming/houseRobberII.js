/**
 * @param {number[]} nums
 * @return {number}
 */

var rob = function (nums) {
  const len = nums.length;
  if (len < 2) {
    return nums[0] ? nums[0] : 0;
  }

  const arrA = nums.slice(0, len - 1);
  const arrB = nums.slice(1, len);

  return Math.max(houseRobberOne(arrA), houseRobberOne(arrB));
};

const houseRobberOne = (nums) => {
  let prevPrevSum = 0;
  let prevSum = 0;

  for (let i = 0; i < nums.length; i++) {
    let temp = Math.max(prevPrevSum + nums[i], prevSum);
    prevPrevSum = prevSum;
    prevSum = temp;
  }

  return prevSum;
};

const testArr = [1, 2, 3, 1];
console.log(rob(testArr));

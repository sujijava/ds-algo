/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const binarySearch = (nums, target, leftIndex, rightIndex) => {
    if (leftIndex > rightIndex) {
      return -1;
    }

    const mid = Math.floor((leftIndex + rightIndex) / 2);

    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] < target) {
      return binarySearch(nums, target, mid + 1, rightIndex);
    }
    if (nums[mid] > target) {
      return binarySearch(nums, target, leftIndex, mid - 1);
    }
    return -1;
  };

  return binarySearch(nums, target, 0, nums.length - 1);
};

console.log(search([-1, 0, 3, 5, 9, 12], 2));

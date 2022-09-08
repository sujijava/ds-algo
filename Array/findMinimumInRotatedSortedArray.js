/**
 * @param {number[]} nums
 * Time O(log(N)) | Space O(1)
 * @return {number}
 */
var findMin = function (nums) {
    let [left, right] = [0, (nums.length - 1)];

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        const midNum = nums[mid];
        const leftNum = nums[left]
        const rightNum = nums[right]

        //this means leftNum(incl.)~rightNum(incl.) is in ascending order
        if (leftNum < rightNum) {
            return leftNum;
        }

        // this means leftNum(incl.)~midNum(incl.) is in ascending order
        if (leftNum <= midNum) {
            left = mid + 1;
        }

        if (leftNum > midNum) {
            right = mid;
        }

    }

    return nums[left];
};

const nums = [5, 1, 2, 3, 4]
console.log(findMin(nums))

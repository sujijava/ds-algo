/**
 * @param {number[]} height
 * @return {number}
 */

//  Input: height = [1,8,6,2,5,4,8,3,7]
//  Output: 49
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    if (height[left] <= height[right]) {
      let w = right - left;
      let h = height[left];
      maxArea = Math.max(maxArea, w * h);
      left++;
    }
    else if (height[left] > height[right]) {
      let w = right - left;
      let h = height[right];
      maxArea = Math.max(maxArea, w * h);
      right--;
    }
  }

  return maxArea;
};

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height));

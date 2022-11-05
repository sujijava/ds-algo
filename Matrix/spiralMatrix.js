/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let right = matrix[0].length - 1;
  let bottom = matrix.length - 1;
  let left = 0;
  let top = 0;
  let direction = 0;
  let res = [];

  while (left <= right && bottom >= top) {
    switch (direction) {
      // right
      case 0:
        for (let i = left; i <= right; i++) {
          res.push(matrix[top][i]);
        }
        top++;
        break;
      // bottom
      case 1:
        for (let i = top; i <= bottom; i++) {
          res.push(matrix[i][right]);
        }
        right--;
        break;

      //left
      case 2:
        for (let i = right; i >= left; i--) {
          res.push(matrix[bottom][i]);
        }
        bottom--;
        break;

      //top
      case 3:
        for (let i = bottom; i >= top; i--) {
          res.push(matrix[i][left]);
        }
        left++;
        break;

      default:
        break;
    }
    direction = (direction + 1) % 4;
  }
  return res;
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(spiralOrder(matrix));

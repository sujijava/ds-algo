function threeNumberSum(array, targetSum) {
  // ascending sort
  bubbleSort(array);
  let triplets = [];
  //   -1, 0,  1,  2, 3, 9, 10, 11
  for (let i = 0; i < array.length - 1; i++) {
    let curr = i;
    let left = i + 1;
    let right = array.length - 1 - i;


    while (left < right && curr < array.length-2) {
      if (array[curr] + array[left] + array[right] > targetSum) {
        right = right - 1 ;
      }
      else if (array[curr] + array[left] + array[right] < targetSum) {
        left = left + 1;
      }
      else if (array[curr] + array[left] + array[right] === targetSum) {
        triplets.push([array[curr], array[left], array[right]]);
        left = left + 1;
        right = right - 1;
      }
    }
  }

  return triplets;
}

function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
}

function swap(array, a, b) {
  temp = array[a];
  array[a] = array[b];
  array[b] = temp;
  return array;
}
const modelArr = [1, 2, 3];
// console.log(bubbleSort(modelArr))
// Do not edit the line below.
console.log(threeNumberSum(modelArr, 6));
exports.threeNumberSum = threeNumberSum;

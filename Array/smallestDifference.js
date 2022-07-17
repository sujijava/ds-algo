function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.

  let arrayOneIndex = 0;
  let arrayTwoIndex = 0;
  let smallestDiff = Number.MAX_SAFE_INTEGER;
  let currentDiff = Number.MAX_SAFE_INTEGER;
  let smallestPair = [];

  arrayOne.sort(function(a,b){return a - b})
  arrayTwo.sort(function(a,b){return a - b})

  while (arrayOneIndex < arrayOne.length && arrayTwoIndex < arrayTwo.length) {

    firstNum = arrayOne[arrayOneIndex]
    secondNum = arrayTwo[arrayTwoIndex]

    currentDiff = Math.abs(firstNum - secondNum);

    if (firstNum === secondNum) {
      return [firstNum, secondNum];
    } else if (firstNum < secondNum) {
      arrayOneIndex++;
    } else if (firstNum > secondNum) {
      arrayTwoIndex++;
    }

    if (smallestDiff > currentDiff) {
      smallestDiff = currentDiff;
      smallestPair = [firstNum, secondNum];
    }
  }
  return smallestPair
}

let arrayOne = [-1, 5, 10, 20, 28, 3]
let arrayTwo = [26, 134, 135, 15, 17]

console.log(smallestDifference(arrayOne, arrayTwo))
// Do not edit the line below.
exports.smallestDifference = smallestDifference;

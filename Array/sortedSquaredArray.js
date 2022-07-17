function sortedSquaredArray(array) {

  // Write your code here.
  let leftPointer = 0;
  let rightPointer = array.length-1;
  let newArr = []

  while(leftPointer < rightPointer +1){
    let leftNum = array[leftPointer]
    let rightNum = array[rightPointer]

    if(Math.abs(leftNum) > Math.abs(rightNum)){
      newArr.unshift(leftNum * leftNum)
      leftPointer++
    } else {
      newArr.unshift(rightNum * rightNum)
      rightPointer--
    }
  }
  return newArr
}

console.log(sortedSquaredArray( [-50, -13, -2, -1, 0, 0, 1, 1, 2, 3, 19, 20]))
// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;

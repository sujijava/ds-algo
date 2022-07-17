function isValidSubsequence(array, sequence) {
    // Write your code here.
  let arrayIndex = 0
  let sequenceIndex = 0

  while(arrayIndex<array.length && sequenceIndex<sequence.length){
    if(sequence[sequenceIndex] === array[arrayIndex]){
      sequenceIndex++;
    }
    arrayIndex++;
  }

  return sequenceIndex === sequence.length;

}



const arr = [5, 1, 22, 25, 6, -1, 8, 10]
const subsequent = [5, 1, 22, 22, 25, 6, -1, 8, 10]

console.log(isValidSubsequence(arr, subsequent))

  // Do not edit the line below.
  exports.isValidSubsequence = isValidSubsequence;

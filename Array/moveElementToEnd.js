function moveElementToEnd(array, toMove) {
  // Write your code here.
  let lp = 0;
  let rp =  array.length - 1;

  while(lp<rp){

    if(array[rp] === toMove){
      rp--
    }

    if(array[lp] !== toMove){
      lp++
    }

    if(array[lp] === toMove && array[rp] !== toMove){
      swap(array, lp, rp)
      lp++
      rp--
    }
  }

  return array;
}

function swap(array, a, b) {
  let temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

const arr = [2, 1, 2, 2, 2, 3, 4, 2];
console.log(moveElementToEnd(arr, 2));
// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;

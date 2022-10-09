const canJump = (arr) => {
  let arrLen = arr.length;
  let last = arrLen - 1;

  for (let i = arrLen - 2; i >= 0; i--) {
    const currentIndexPlusValue = i + arr[i];
    if (currentIndexPlusValue >= last) last = i;
  }
  return last <= 0;
};

const arr = [2, 3, 1, 1, 4];

console.log(canJump(arr));

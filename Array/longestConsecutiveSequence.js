var longestConsecutive = function (nums) {
  let longestLen = 0;
  const uniqueNums = [...new Set(nums)];

  uniqueNums.forEach((num, index) => {
    if (uniqueNums.includes(num - 1) === false) {
      let currLen = 1;
      while (uniqueNums.includes(num + currLen)) {
        currLen = currLen + 1;
      }
      longestLen = Math.max(currLen, longestLen);
    }
  });

  return longestLen;
};

console.log(longestConsecutive([1, 2, 3]));

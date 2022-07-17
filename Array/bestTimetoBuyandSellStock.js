/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function (prices) {
  let left = 0;
  let right = 1;
  let maxProfit = 0;

  while (right < prices.length) {
    let leftNum = prices[left];
    let rightNum = prices[right];

    if (rightNum - leftNum < 0) {
      left = right;
    }
    if (rightNum - leftNum > maxProfit) {
      maxProfit = rightNum - leftNum;
    }
    right++;
  }

  return maxProfit;
};

console.log(maxProfit([7, 2, 3, 4, 5]));

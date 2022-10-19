/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  const returnArr = [];

  for (let i = 0; i < intervals.length; i++) {
    const currentInterval = intervals[i];
    const currentIntervalStart = currentInterval[0];
    const currentIntervalEnd = currentInterval[1];

    if (newInterval == null || currentIntervalEnd < newInterval[0])
      returnArr.push(currentInterval);
    else if (currentIntervalStart > newInterval[1]) {
      returnArr.push(newInterval);
      returnArr.push(currentInterval);
      newInterval = null;
    } else {
      newInterval[0] = Math.min(newInterval[0], currentIntervalStart);
      newInterval[1] = Math.max(newInterval[1], currentIntervalEnd);
    }
  }
  if (newInterval != null) {
    returnArr.push(newInterval);
  }

  return returnArr;
};

const intervals = [
  [1, 2],
  [3, 5],
  [6, 7],
  [8, 10],
  [12, 16],
];
const newInterval = [4, 8];

console.log(insert(intervals, newInterval));

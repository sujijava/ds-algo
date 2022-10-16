const eraseOverlapIntervals = (intervals) => {
  if (intervals == null || intervals.length == 0) return 0;

  intervals.sort((a, b) => a[1] - b[1]);

  let prevEnd = intervals[0][1];
  let count = 0;
  for (let i = 1; i < intervals.length; i++) {
    if (prevEnd > intervals[i][0]) {
      count++;
      prevEnd = Math.min(intervals[i][1], prevEnd);
    } else {
      prevEnd = intervals[i][1];
    }
  }
  return count;
};

const intervals = [
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 3],
];

console.log(eraseOverlapIntervals(intervals));

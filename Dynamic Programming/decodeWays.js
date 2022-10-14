const numDecodings = (s) => {
  if (s === null || s.length === 0) {
    return 0;
  }
  let n = s.length;
  const dp = new Array(n + 1);

  dp[0] = 1;
  dp[1] = s[0] != "0" ? 1 : 0;
  for (let i = 2; i <= n; i++) {
    dp[i] = 0;
    let first = parseInt(s.slice(i - 1, i));
    let second = parseInt(s.slice(i - 2, i));
    if (first >= 1 && first <= 9) {
      dp[i] += dp[i - 1];
    }
    if (second >= 10 && second <= 26) {
      // why?
      dp[i] += dp[i - 2];
    }
  }
  return dp[n];
};

console.log(numDecodings("226"));

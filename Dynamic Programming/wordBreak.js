var wordBreak = function (s, wordDict) {
  const dp = Array(s.length).fill(false);
  console.log(dp);
  for (let i = 0; i <= s.length; i++) {
    wordDict.forEach((eachWord) => {
      if (
        eachWord === s.slice(i - eachWord.length, i) &&
        (dp[i - eachWord.length] || i - eachWord.length === 0)
      ) {
        dp[i] = true;
      }
    });
  }
  console.log(dp);
  console.log(dp.length);
  return dp[s.length] || false;
};

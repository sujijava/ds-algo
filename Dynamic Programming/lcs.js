/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  //   const paramOne = text1;
  //   const paramTwo = text2;
  console.log(typeof text1);
  const text1Indicator = text1.toString().split("");
  text1Indicator.push("last");

  const text2Indicator = text2.toString().split("");
  text2Indicator.push("last");

  for (let i = 0; i < text1Indicator.length; i++) {
    for (let j = 0; j < text2Indicator.length; j++) {
      if (text1Indicator[i] === "last" || text2Indicator[j] === "last") {
        return 0;
      } else if (text1Indicator[i] === text2Indicator[j]) {
        return 1 + longestCommonSubsequence(i + 1, j + 1);
      } else {
        return Math.max(
          longestCommonSubsequence(i + 1, j),
          longestCommonSubsequence(i, j + 1)
        );
      }
    }
  }
};

const text1 = "string";
const text2 = "number";
console.log(longestCommonSubsequence(text1, text2));

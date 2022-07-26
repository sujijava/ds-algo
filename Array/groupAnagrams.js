/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let result = {};

  for (let word of strs) {
    let sorted = word.split("").sort().join("");
    if (result[sorted]) {
      result[sorted].push(word);
    } else {
      result[sorted] = [word];
    }
  }
  return Object.values(result);
};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

console.log(groupAnagrams(strs));

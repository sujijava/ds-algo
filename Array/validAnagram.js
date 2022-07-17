/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const hashTableS = new Map();
  const hashTableT = new Map();

  if (s.length !== t.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    let charS = s[i];
    let charT = t[i];

    if (hashTableS.get(charS)) {
      hashTableS.set(charS, hashTableS.get(charS) + 1);
    } else {
      hashTableS.set(charS, 1);
    }

    if (hashTableT.get(charT)) {
      hashTableT.set(charT, hashTableT.get(charT) + 1);
    } else {
      hashTableT.set(charT, 1);
    }
  }

  for (const [key, value] of hashTableS) {
    if (value !== hashTableT.get(key)) {
      return false;
    }
  }

  return true;
};

console.log(isAnagram("a", "ab"));
// console.log(isAnagram("cat", "rat"))

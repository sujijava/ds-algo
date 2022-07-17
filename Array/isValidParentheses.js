/**
 * @param {string} s
 * @return {boolean}
 */
var isValidParentheses = function (s) {
  const closingToOpeningSet = new Map();
  let stack = []

  closingToOpeningSet.set(")", "(");
  closingToOpeningSet.set("}", "{");
  closingToOpeningSet.set("]", "[");

  for (const character of s) {
    if ([...closingToOpeningSet.keys()].includes(character)) {
        if(stack && [...stack].pop() === closingToOpeningSet.get(character)){
            stack.pop()
        }else {
            return false
        }
    } else {
        stack.push(character)
    }
}
  return stack.length === 0;
};

console.log(isValidParentheses(["(", "{", "}", ")"]))

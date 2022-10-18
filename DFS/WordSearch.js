/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const visited = [];
  for (let n = 0; n < board.length; n++) {
    visited.push([]);
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (word[0] === board[i][j] && dfs(board, word, 0, i, j, visited)) {
        return true;
      }
    }
  }
  return false;
};

const dfs = (board, word, currIndex, i, j, visited) => {
  if (word.length === currIndex) {
    return true;
  }

  if (
    i >= 0 &&
    j >= 0 &&
    i <= board.length &&
    j <= board[0].length &&
    word[currIndex] === board[i][j] &&
    visited[i][j] !== true
  ) {
    visited[i][j] = true;
    dfs(board, word, currIndex + 1, i, j + 1, visited);
    dfs(board, word, currIndex + 1, i, j - 1, visited);
    dfs(board, word, currIndex + 1, i - 1, j, visited);
    dfs(board, word, currIndex + 1, i + 1, j, visited);
    visited[i][j] = false;
  }

  return false;
};

const board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];
const word = "ABCCED";
console.log(exist(board, word));

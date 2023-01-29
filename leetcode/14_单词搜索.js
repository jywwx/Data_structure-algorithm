/**
 *
 * @param {*} board
 * @param {*} word
 */

/**
 * 输入:
 * board = [
 * ['A'，'B','C','E']
 * ['S'，'F','C','S']
 * ['A'，'D','E','E']
 * ]
 * word = ['ABCCED'];
 * 输出: bool
 *
 *
 */
const board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
  ],
  word = "ABCCED";

var exist = function (board, word) {
  if (board.length === 0) {
    return false;
  }
  if (word.length === 0) {
    return true;
  }

  const Row = board.length;
  const Col = board[0].length;

  for (let i = 0; i < Row; i++) {
    for (let j = 0; j < Col; j++) {
      const ret = find(i, j, 0);
      if (ret) {
        return ret;
      }
    }
  }
  function find(i, j, cur) {
    if (i >= Row || i < 0) {
      return false;
    }

    if (j >= Col || j < 0) {
      return false;
    }

    const letter = board[i][j];

    if (letter !== word[cur]) {
      return false;
    }
    if (letter === word[word.length - 1]) {
      return true;
    }

    board[i][j] = null;
    const ret =
      find(i, j + 1, cur + 1) ||
      find(i, j - 1, cur + 1) ||
      find(i - 1, j, cur + 1) ||
      find(i + 1, j, cur + 1);
    board[i][j] = letter;
    return ret;
  }
  return false;
};
console.log(exist(board, word));

// 解题思路公式

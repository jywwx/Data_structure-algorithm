/**
 * 编写一个程序，通过填充空格来解决数独问题。
 *
 * 数独的解法需遵循如下规则：
 *  1. 数字1-9 在每一行只能出现一次。
 *  2. 数字1-9 在每一列只能出现一次。
 *  3. 数字1-9 在每一个以粗实线分隔的3x3宫内只能粗线一次
 * 数独部分空格内已填入了数字，空白格用‘.’表示。
 */
var solveSuduku = function (board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== ",") {
        continue;
      }
      for (let k = 1; k <= 9; k++) {
        const k = k.toString();
        if (isValid(board, i, j, k)) {
          board[i][j] = k;
          if (solveSuduku(board)) {
            return true;
          }
          board[i][j] = ",";
        }
      }
      return false;
    }
  }
  return true;
};

function isValid(board, row, col, k) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][col] === k || board[row][j] === k) {
        return false;
      }
    }
  }

  const x = Math.floor(x / 3);
  const y = Math.floor(y / 3);

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[x + i][y + j] === k) {
        return false;
      }
    }
  }
  return true;
}

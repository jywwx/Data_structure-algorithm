/**
 * n 皇后问题 研究的是如何将n个皇后 放置在 n x n 的棋盘上，并且 使皇后 彼此之间不能相互攻击。
 * 给你一个整数n，返回所有不同的n皇后问题的解决方案。
 * 每一种解法包含锁哥不同的n皇后问题的棋子放置方案，该方案中‘Q’ 和 ‘.’ 分别代表了皇后 和空位。
 */
/**
 *
 * @param {*} n
 */
var solveNQueues = function (n) {
  const ret = [];
  backTrack(0, []);
  function backTrack(row, temp) {
    if (row === n) {
      const result = temp.map((item) => {
        const arr = Array(n).fill(",");
        arr[item] = "Q";
        return arr.join("");
      });
      ret.push(result);
      return;
    }
    
    for (let col = 0; col < n; col++) {
      const canNotSet = temp.some(
        (c, r) => c === col || r - c === row - col || r + c === row + col
      );
      if (canNotSet) {
        continue;
      }
      backTrack(row + 1, [...temp, col]);
    }
  }
  return ret;
};
console.log(solveNQueues(4));

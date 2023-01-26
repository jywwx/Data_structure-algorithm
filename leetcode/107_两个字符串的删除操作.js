/**
 * 给定两个单词word1 和 word2, 返回使的word1 和word2 相同所需的最小步数
 *
 * 每步可以删除任意一个字符串中的一个字符
 */
var minDistance = function (word1, word2) {
  /**
   * dp[i][j] 的定义
   *   word1的 slice(0,i), word2.slice(0,j)相互删除字符达到相同所需要的步数
   *
   *   word1[i - 1] 和 word2[j - 1]
   *   相同
   *     bag
   *     eag
   *     dp[i][j] = dp[i - 1][j - 1]
   *   不相同
   *     bag
   *     eat    删除g 删除t  删除gt
   *
   *     dp[i][j] = dp[i - 1][j - 1] dp[i - 1][j] dp[i][j - 1]  三种情况取最小值
   */
  const dp = Array(word1.length + 1)
    .fill(0)
    .map((i) => Array(word2.length + 1).fill(0));

  for (let i = 1; i <= word1.length; i++) {
    dp[i][0] = i;
  }

  for (let j = 1; j <= word2.length; j++) {
    dp[0][j] = j;
  }
  // 矩阵初始化
  /**
    [
        [0, 1, 2, 3],
        [1, 0, 0, 0],
        [2, 0, 0, 0],
        [3, 0, 0, 0],
    ];
    */

  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j - 1] + 2,
          dp[i][j - 1] + 1,
          dp[i - 1][j]
        );
      }
    }
  }
  return dp[word1.length][word2.length];
};

minDistance("sea", "eat");
